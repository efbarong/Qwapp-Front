import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ExchangeServices } from 'src/app/services/ExchangeServices';
import { Exchange } from 'src/app/models/exchange';
import { user } from 'src/app/models/user';
import { UserServices } from 'src/app/services/UserServices';

@Component({
  selector: 'app-proceso-resume',
  templateUrl: './proceso-resume.page.html',
  styleUrls: ['./proceso-resume.page.scss'],
})
export class ProcesoResumePage implements OnInit {

  constructor(private router: Router, private activeR: ActivatedRoute, private exService: ExchangeServices, private uService: UserServices) { 
    this.u = uService.user;
  }

  resume: Exchange;
  u: user;
  ngOnInit() {
    this.activeR.params.subscribe(res => {
      /** @TODO No debe recibir todo el objeto por la url, solo el id del proceso e
       * invocar servicio que traiga la data, o... i don't know, my nigga :'v
       */
      console.log(this.resume = JSON.parse(res.cambios));
    });
  }

  cancelSwap() {
    this.exService.deleteExchangeById(this.resume.id);
    this.router.navigateByUrl("/proceso-list");
    console.log('Cancelar intercambioo');
  }

  YESYESYES(){
    this.exService.setExchangeById(this.resume.id);
    this.router.navigateByUrl("/proceso-list");

  }

  NONONO(){
    this.exService.deleteExchangeById(this.resume.id);
    this.router.navigateByUrl("/proceso-list");
    console.log('Cancelar intercambioo');
  }
}
