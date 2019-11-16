import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PerfilEditPage } from './perfil-edit.page';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

const routes: Routes = [
  {
    path: '',
    component: PerfilEditPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PerfilEditPage]
})
export class PerfilEditPageModule {}
