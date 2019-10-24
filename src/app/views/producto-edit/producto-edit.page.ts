import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, ActionSheetController, ToastController, Platform } from '@ionic/angular';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File } from '@ionic-native/file/ngx';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';

const STORAGE_KEY = 'my_imgs';
@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.page.html',
  styleUrls: ['./producto-edit.page.scss'],
})
export class ProductoEditPage implements OnInit {
  // Variables
  ciudades: any;
  cc: any;
  images: Array<any>;

  // Slides
  @ViewChild('mySlider', null)slides: IonSlides;

  // tslint:disable-next-line: max-line-length
  constructor( private camera: Camera, private file: File, private storage: Storage, private plt: Platform, private webView: WebView, private actionSheetController: ActionSheetController, private toastController: ToastController) {
    this.ciudades = [
      {name: 'Bogota',   value: 'A' },
      {name: 'Cali',     value: 'B' },
      {name: 'Medallo',  value: 'C' },
      {name: 'El rosal', value: 'D' },
    ];
    this.images = new Array<any>();
  }
  // Mostrar notificación
  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
    toast.present();
  }

  // Botones del Slide
  public next() {
    this.slides.slideNext();
  }
  public prev() {
    this.slides.slidePrev();
  }

  // Imagenes Slide 2 (Captura de camara o galeria)

  loadStoredImages() {
    this.storage.get(STORAGE_KEY).then(images => {
      if (images) {
        const arr = JSON.parse(images);
        this.images = [];
        for ( const img of arr) {
          const filePath = this.file.dataDirectory + img;
          const resPath = this.pathForImage(filePath);
          this.images.push({name: img, path: resPath, filePath});
        }
      }
    });
  }

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
      this.images.push({path: imag});
    }, (err) => {
      console.log('fasho');
    });
  }

  deleteImg(imgEntry, position) {
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      console.log('img entry ' + imgEntry.name);
      const filtered = arr.filter(name => name != imgEntry.name);
      console.log(filtered);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      const correctPath = imgEntry.filePath.substr(0, imgEntry.filepath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('Archivo eliminado');
      });
    });
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.loadStoredImages();
    });
  }


  // Pruebas
  segmentChanged(ev: any) {
    console.log('Segmento cambiado', ev);
  }

  test() {
    console.log('Ciudad cambiada', this.cc);
  }
}
