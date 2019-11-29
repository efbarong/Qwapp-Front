import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Exchange } from 'src/app/models/exchange';
import { ExchangeServices } from 'src/app/services/ExchangeServices';
import { user } from 'src/app/models/user';
import { UserServices } from 'src/app/services/UserServices';

@Component({
  selector: 'app-proceso-list',
  templateUrl: './proceso-list.page.html',
  styleUrls: ['./proceso-list.page.scss'],
})
export class ProcesoListPage implements OnInit {

  /*
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
*/
  procesos: Array<Exchange>;
  procesosRecibidos: Array<Exchange>;
  constructor(private router: Router, private exService: ExchangeServices, private uServices: UserServices) {
      this.procesos = exService.getExchagesById(uServices.user.id);
      this.procesosRecibidos = exService.getIncomingExchagesById(uServices.user.id);
   }

  viewProcess(cambios: Exchange) {

    /** @TODO Enviar en vez de 'cambios', solo el id del proceso de cambio de los dos productos y luego
     * pedirlos desde la nueva vista o /proceso-resume con el id
     * O como quiera hacerlo pinche puto Marlon xd
     */
    this.router.navigate(['/proceso-resume', { cambios: JSON.stringify(cambios) }]);
  }

  ngOnInit() {
  }

}
