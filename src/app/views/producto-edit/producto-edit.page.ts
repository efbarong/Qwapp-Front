import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides} from '@ionic/angular';

@Component({
  selector: 'app-producto-edit',
  templateUrl: './producto-edit.page.html',
  styleUrls: ['./producto-edit.page.scss'],
})
export class ProductoEditPage implements OnInit {
  @ViewChild('mySlider', null)slides: IonSlides;
  ciudades: any;
  cc: any;
  constructor() {
    this.ciudades = [
      {name: 'Bogota',   value: 'A' },
      {name: 'Cali',     value: 'B' },
      {name: 'Medallo',  value: 'C' },
      {name: 'El rosal', value: 'D' },
    ];
   }
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

  test() {
    console.log('Ciudad cambiada', this.cc);
  }
}
