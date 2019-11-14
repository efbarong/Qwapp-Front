import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/services/AuthServices';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide: boolean;
  user: any;
  pass: any;
  constructor(private router: Router, private login: AuthServices) {
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

  registrarse() {
    this.router.navigateByUrl('/register');
  }

  ngOnInit() {
  }
}
