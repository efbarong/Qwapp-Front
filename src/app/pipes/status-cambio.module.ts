import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatusCambioPipe } from './status-cambio.pipe';
import { EstadoPipe } from './estado/estado.pipe';

@NgModule({
  declarations: [StatusCambioPipe, EstadoPipe],
  imports: [CommonModule],
  exports: [StatusCambioPipe, EstadoPipe]
})
export class StatusCambioModule { }
