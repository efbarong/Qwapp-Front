import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/services/UserServices';
import { user } from 'src/model/user';
import { ProductServices } from 'src/services/ProductServices';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  image: any;
  user: user;
  
  constructor(private router: Router, private uService: UserServices, private pService: ProductServices) {
    this.image = 'https://s3-us-west-1.amazonaws.com/malv.images/images/LhUPHDwes61dbkvaHKZBkJGeFMuV74APSn9Y0M5G.jpg';
    this.user = uService.user;
   }

  ngOnInit() {
  }

  mover() {
    this.router.navigateByUrl('/login');
  }

  ionViewDidEnter(){
    this.user = this.uService.user;
    console.log(this.pService.productList);    
  }


}
