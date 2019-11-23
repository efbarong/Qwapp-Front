import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCambioPipe } from './status-cambio.pipe';

@NgModule({
  declarations: [StatusCambioPipe],
  imports: [CommonModule],
  exports: [StatusCambioPipe]
})
export class StatusCambioModule { }
