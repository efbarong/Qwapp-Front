import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { ProductServices } from 'src/app/services/ProductServices';
import { UserServices } from 'src/app/services/UserServices';
import { Product } from '../../models/product';
import { user } from '../../models/user';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  image: any;
  user: user;
  products: Product[];

  constructor(
    private router: Router,
    private uService: UserServices,
    private pService: ProductServices,
    private toastController: ToastController) {
    this.image = 'https://s3-us-west-1.amazonaws.com/malv.images/images/LhUPHDwes61dbkvaHKZBkJGeFMuV74APSn9Y0M5G.jpg';
    this.user = uService.user;
  }

  ionViewDidEnter() {
    this.user = this.uService.user;
    this.products = this.pService.productList;
  }

  editProfile() {
    this.router.navigateByUrl('/perfil-edit');
  }

  editProduct() {
    /** @TODO Enviar a la pagina de editar producto y pasar producto a editar como parametro
     * en la Url de abajo
     * Ejem:
     * editProduct(producto) {
     * this.router.navigate(['/producto-edit', {producto}]);
     * }
     */

    this.router.navigate(['/producto-edit']);
  }

  deleteProduct() {
    // borrar producto
  }
  async checknew() {
    /** @TODO Si añadieron un producto, debe aparecer "Has creado un producto satisfactoriamente */

    const toast = await this.toastController.create({
      message: 'Tu producto se creo satisfactoriamente',
      duration: 3000
    });
    toast.present();
  }

  ngOnInit() {
  }
}
