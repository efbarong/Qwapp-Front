import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product';
import { ProductServices } from 'src/app/services/ProductServices';
import { UserServices } from 'src/app/services/UserServices';
import { user } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { Exchange } from 'src/app/models/exchange';

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
  receiver: Product;
  producto: any;
  constructor(
    private router: Router,
    private uService: UserServices,
    private pService: ProductServices,
    private actived: ActivatedRoute) {
    this.user = uService.user;
  }
  send(){

    const newExchange: Exchange = new Exchange();
    newExchange.sender = this.user.id;
    newExchange.receiver = this.receiver.user;
    let p: Product;
    this.products.forEach(e =>{
      if(e.id == this.producto) 
        p = e;
    });
    newExchange.productSend = p;
    newExchange.productReceiver = this.receiver; // other user product
    newExchange.date = new Date();
    newExchange.state = true;

    console.log(JSON.stringify(newExchange));
    this.router.navigate(['/iresume', { producto: JSON.stringify(newExchange)}]);
  }

  ionViewDidEnter() {
    this.user = this.uService.user;
    this.products = this.pService.productList;
    console.log(this.products);
  }
  ngOnInit() {
    this.actived.params.subscribe(res => {
      this.receiver = JSON.parse(res.producto);
      console.log(this.receiver);
    });
  }
}
