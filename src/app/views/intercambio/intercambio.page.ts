import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServices } from 'src/app/services/ProductServices';
import { UserServices } from 'src/app/services/UserServices';
import { user } from '../../models/user';

@Component({
  selector: 'app-intercambio',
  templateUrl: './intercambio.page.html',
  styleUrls: ['./intercambio.page.scss'],
})
export class IntercambioPage implements OnInit {

  image: any;
  user: user;
  products: Product[];
  btnNxt: boolean;
  exangeConf: boolean;

  constructor(
    private uService: UserServices,
    private pService: ProductServices) {
    this.user = uService.user;
  }

  ionViewDidEnter() {
    this.user = this.uService.user;
    this.products = this.pService.productList;
    console.log(this.products);
  }
  ngOnInit() {
  }
}
