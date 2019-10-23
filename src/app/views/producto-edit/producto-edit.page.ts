import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.page.html',
  styleUrls: ['./producto-edit.page.scss'],
})
export class ProductoEditPage implements OnInit {
  constructor() { }
  @ViewChild('mySlider', null)slides: IonSlides;
  public next() {
    this.slides.slideNext();
  }

  public prev() {
    this.slides.slidePrev();
  }

  ngOnInit() {}

  segmentChanged(ev: any) {
    console.log('Segmento cambiado', ev);
  }
}
