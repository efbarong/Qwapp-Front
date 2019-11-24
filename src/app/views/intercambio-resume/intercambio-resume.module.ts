import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { IntercambioResumePage } from './intercambio-resume.page';

const routes: Routes = [
  {
    path: '',
    component: IntercambioResumePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [IntercambioResumePage]
})
export class IntercambioResumePageModule {}
