import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadoPipe } from './estado.pipe';

@NgModule({
  declarations: [EstadoPipe],
  imports: [
    CommonModule
  ],
  exports: [EstadoPipe]
})
export class EstadoModule { }
