import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  hide: boolean;
  user: any;
  pass: any;
  constructor(private router: Router) {
    this.hide = true;
  }

  iniciarSesion() {
    if (this.user && this.pass) {
      console.log(this.user);
      localStorage.setItem('sesion', this.user.toString());
      this.router.navigateByUrl('/perfil');
    } else {
      console.log('Completa los campos');
    }
  }

  ngOnInit() {
    // Validar sesion antes de mostrar login
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/perfil');
    }
  }
}
