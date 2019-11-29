import { Component, OnInit } from '@angular/core';
import { Exchange } from 'src/app/models/exchange';
import { ActivatedRoute, Router } from '@angular/router';
import { ExchangeServices } from 'src/app/services/ExchangeServices';

@Component({
  selector: 'app-intercambio-resume',
  templateUrl: './intercambio-resume.page.html',
  styleUrls: ['./intercambio-resume.page.scss'],
})
export class IntercambioResumePage implements OnInit {

  exchange: Exchange
  constructor(private actived: ActivatedRoute, private exService: ExchangeServices, private router: Router) { }


  onClick(){
    this.exService.createExchange(this.exchange);
    this.router.navigateByUrl('/perfil');
  }
  ngOnInit() {
    this.actived.params.subscribe(res => {
      this.exchange = JSON.parse(res.producto);
    });
  }

}
