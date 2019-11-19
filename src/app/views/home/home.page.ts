import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/UserServices';
import { ProductServices } from 'src/app/services/ProductServices';
import { user } from '../../models/user';
import { Product } from '../../models/product';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: user;
  products: Product[];
  constructor(
    private router: Router,
    private uService: UserServices,
    private pService: ProductServices) {
    this.user = uService.user;
  }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.user = this.uService.user;
    this.pService.getNextPage(this.user.id);
    this.products = this.pService.otherProductList;
    console.log(this.pService.otherProductList);
  }

  print(event) {
    console.log('Begin async operation');
    setTimeout(() => {
      // this.pService.getNextPage(this.user.id);
      this.pService.restartPage(this.user.id);
      this.products = this.pService.otherProductList;
      console.log(this.pService.otherProductList);
      event.target.complete();
    }, 2000);
  }

}
