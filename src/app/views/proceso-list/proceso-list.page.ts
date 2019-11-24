import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proceso-list',
  templateUrl: './proceso-list.page.html',
  styleUrls: ['./proceso-list.page.scss'],
})
export class ProcesoListPage implements OnInit {

  procesos: Array<any> = [
    {
      p1: 'Xbox One',
      p2: 'Alcatel Pixie',
      date: new Date(),
      status: true
    },
    {
      p1: 'Xbox One',
      p2: 'Alcatel Pixie',
      date: new Date(),
      status: false
    }, {
      p1: 'Xbox One',
      p2: 'Alcatel Pixie',
      date: new Date(),
      status: false
    }, {
      p1: 'Xbox One',
      p2: 'Alcatel Pixie',
      date: new Date(),
      status: true
    }
  ];
  constructor(private router: Router) { }

  viewProcess(cambios) {

    /** @TODO Enviar en vez de 'cambios', solo el id del proceso de cambio de los dos productos y luego
     * pedirlos desde la nueva vista o /proceso-resume con el id
     * O como quiera hacerlo pinche puto Marlon xd
     */
    this.router.navigate(['/proceso-resume', { cambios: JSON.stringify(cambios) }]);
  }

  ngOnInit() {
  }

}
