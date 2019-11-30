import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductoPage } from './producto.page';
import { StatusCambioModule } from '../../pipes/status-cambio.module';

const routes: Routes = [
  {
    path: '',
    component: ProductoPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes),
    StatusCambioModule
  ],
  declarations: [ProductoPage]
})
export class ProductoPageModule {}
