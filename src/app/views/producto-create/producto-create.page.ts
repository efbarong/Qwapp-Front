import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController, ToastController, Platform, AlertController } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';
import { Product } from '../../models/product';
import { UserServices } from '../../services/UserServices';
import { ProductServices } from '../../services/ProductServices';
import { ActivatedRoute, Router } from '@angular/router';

const STORAGE_KEY = 'my_imgs';

@Component({
  selector: 'app-producto-create',
  templateUrl: './producto-create.page.html',
  styleUrls: ['./producto-create.page.scss'],
})
export class ProductoCreatePage implements OnInit {
  // Variables
  ciudades: any;
  cc: any;
  categorias: any;
  ctg: any;
  images: Array<any>;
  stateProd: any;
  posSlide: any = 1;
  rate: any;
  name: string;
  description: string;
  // Slides
  @ViewChild('mySlider', null) slides: IonSlides;

  // tslint:disable-next-line: max-line-length
  constructor(
    private alert: AlertController,
    private camera: Camera,
    private file: File,
    private storage: Storage,
    private plt: Platform,
    private webView: WebView,
    private actionSheetController: ActionSheetController,
    private toastController: ToastController,
    private uService: UserServices,
    private pService: ProductServices,
    private active: ActivatedRoute,
    private router: Router) {

    this.ciudades = [
      { name: 'Bogota', value: 'A' },
      { name: 'Cali', value: 'B' },
      { name: 'Medallo', value: 'C' },
      { name: 'El rosal', value: 'D' },
    ];

    this.categorias = [
      { name: 'Tecnologia', value: 'A' },
      { name: 'Celulares', value: 'B' },
      { name: 'Otros', value: 'C' },
      { name: 'Libros', value: 'D' },
      { name: 'Electronica', value: 'E' },
      { name: 'Laptops', value: 'F' },
      { name: 'Ropa', value: 'G' },
      { name: 'Tenis', value: 'H' },
      { name: 'Calzado', value: 'I' }
    ];
    this.images = new Array<any>();
  }
  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Bienvenido',
      message: 'Vamos a crear un producto',
      buttons: ['Listo!']
    });
    await alert.present();
  }
  // Mostrar notificación
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 2500
    });
    toast.present();
  }

  // Botones del Slide
  public next() {
    this.slides.slideNext();
    this.posSlide++;
  }
  public prev() {
    this.slides.slidePrev();
    this.posSlide--;
  }

  // Imagenes Slide 2 (Captura de camara o galeria)
  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webView.convertFileSrc(img);
      console.log(converted);
      return converted;
    }
  }

  async selectImg() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Seleccione origen',
      buttons: [{
        text: 'Cargar de galeria',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Tomar foto',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }
  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      sourceType,
      correctOrientation: true,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    this.camera.getPicture(options).then((imageData) => {
      const imag = this.webView.convertFileSrc(imageData);
      console.log(imageData);
      console.log(imag);
      this.images.push({ path: imag });
      this.presentToast('Foto subida correctamente');
    }, (err) => {
      console.log('Flasho o cancelo');
      this.presentToast('Ups!, Algo fallo');
    });
  }

  deleteImg(imgEntry, position) {
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      console.log('img entry ' + imgEntry.name);
      // tslint:disable-next-line: triple-equals
      const filtered = arr.filter(name => name != imgEntry.name);
      console.log(filtered);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      const correctPath = imgEntry.filePath.substr(0, imgEntry.filepath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('Foto eliminada');
      });
    });
  }

  ngOnInit() {
    this.presentAlert();
  }

  // Pruebas
  segmentChanged(ev: any) {
    console.log('Segmento cambiado', this.stateProd);
  }

  test() {
    console.log('Ciudad cambiada', this.cc);
  }

  onRateChange(event) {
    console.log('Calificación:', event);
  }
  createProduct() {
    const p: Product = new Product();
    p.name = this.name;
    p.description = this.description;
    p.category = this.ctg;
    p.state = this.stateProd !== 0;
    p.user = this.uService.user.id;
    p.date = new Date();
    p.city = this.uService.user.city;
    p.locality = this.uService.user.locality;
    this.pService.createProduct(p);
    console.log(p);
  }

  back() {
    this.active.params.subscribe(res => {
      if (res.id === '1') {
        this.router.navigateByUrl('/perfil');
      } else if (res.id === '2') {
        this.router.navigateByUrl('/home');
      }
    }).unsubscribe();
  }
}
