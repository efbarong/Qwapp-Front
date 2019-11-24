import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProcesoResumePage } from './proceso-resume.page';
import { StatusCambioModule } from '../../pipes/status-cambio.module';

const routes: Routes = [
  {
    path: '',
    component: ProcesoResumePage
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
  declarations: [ProcesoResumePage]
})
export class ProcesoResumePageModule {}
