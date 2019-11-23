import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'statusCambio'
})

export class StatusCambioPipe implements PipeTransform {

  transform(value: any): string {
    if (value) {
      return 'Finalizado';
    } else {
      return 'En Proceso';
    }
  }
}
