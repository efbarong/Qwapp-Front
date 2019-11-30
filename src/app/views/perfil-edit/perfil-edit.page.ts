import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/app/services/UserServices';
import { user } from '../../models/user';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {
  image: any;
  u: user;
  constructor(private router: Router, private uServices: UserServices) {
    this.image = 'assets/img/foto.png';
    this.u = this.uServices.user;
  }

  ngOnInit() {
  }

  send() {
    this.uServices.updateUser(this.u);
  }

}
