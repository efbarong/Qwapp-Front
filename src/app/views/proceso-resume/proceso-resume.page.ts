import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-proceso-resume',
  templateUrl: './proceso-resume.page.html',
  styleUrls: ['./proceso-resume.page.scss'],
})
export class ProcesoResumePage implements OnInit {

  constructor(private router: Router, private activeR: ActivatedRoute) { }

  resume: any;
  ngOnInit() {
    this.activeR.params.subscribe(res => {
      /** @TODO No debe recibir todo el objeto por la url, solo el id del proceso e
       * invocar servicio que traiga la data, o... i don't know, my nigga
       */
      console.log(this.resume = JSON.parse(res.cambios));
    });
  }
}
