import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/app/services/AuthServices';
import { UserServices } from 'src/app/services/UserServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide: boolean;
  user: any;
  pass: any;
  constructor(private router: Router, private login: AuthServices, private uServices: UserServices) {
    this.hide = true;
  }

  iniciarSesion() {
    if (this.user && this.pass) {
      this.login.doLogin(this.user, this.pass, this.router);
      console.log(this.user);
    } else {
      console.log('Completa los campos');
    }
  }

  ionViewDidEnter() {
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/home');
    }
  }

  ngOnInit() {
    // Validar sesion antes de mostrar login
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/perfil');
    }
  }
}
