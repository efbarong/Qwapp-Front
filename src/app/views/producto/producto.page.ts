import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ImageModalPageModule } from 'src/app/image-modal/image-modal.module';
import { ImageModalPage } from 'src/app/image-modal/image-modal.page';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from '../../models/product';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  sliderOpt = {
    zoom: false,
    slidesPerView: 1.2,
    centeredSlides: true,
    spaceBetween: 20
  };

  producto: Product;
  constructor(private modalController: ModalController, private router: Router, private actived: ActivatedRoute) {
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
    this.actived.params.subscribe(res => {
      this.producto = JSON.parse(res.producto);
      console.log(this.producto);
    });
  }

}
