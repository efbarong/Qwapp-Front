import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/UserServices';
import { ProductServices } from 'src/app/services/ProductServices';
import { user } from '../../models/user';
import { Product } from '../../models/product';
import { IonInfiniteScroll } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  user: user;
  products: Product[];
  @ViewChild(IonInfiniteScroll, null) infiniteScroll: IonInfiniteScroll;

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

  refreshOld(event) {
    console.log('Begin async operation: Old data');
    setTimeout(() => {
      this.pService.getNextPage(this.user.id);
      this.products = this.pService.otherProductList;
      console.log(this.pService.otherProductList);
      event.target.complete();
    }, 2000);
  }

  refreshNew(event) {
    console.log('Begin async operation: Update Data');
    setTimeout(() => {
      this.pService.restartPage(this.user.id);
      this.products = this.pService.otherProductList;
      console.log(this.pService.otherProductList);
      event.target.complete();

      // App logic to determine if all data is loaded
      // and disable the infinite scroll
      if (this.products.length === 10) {
        event.target.disabled = true;
      }
    }, 2000);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }


}
