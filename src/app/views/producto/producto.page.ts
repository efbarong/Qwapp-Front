import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPageModule } from 'src/app/image-modal/image-modal.module';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {
   bar = {name: 'Producto', display: 'normal'};

   sliderOpt = {
    zoom: false,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 20
  };

  constructor(private modalController: ModalController) {
  }

  openPreview(img) {
    this.modalController.create({
      component: ImageModalPage,
      componentProps: {
        // tslint:disable-next-line: object-literal-shorthand
        img: img
      }
    }).then(modal => modal.present());
  }
  ngOnInit() {
  }

}
