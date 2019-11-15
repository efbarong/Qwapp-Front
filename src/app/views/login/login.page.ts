import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServices } from 'src/services/AuthServices';
import { UserServices } from 'src/services/UserServices';

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

  registrarse() {
    this.router.navigateByUrl('/register');
  }

  ionViewDidEnter(){
    if(localStorage.getItem("sesion")){
      if(!this.uServices.user){

      }
      this.router.navigateByUrl("/perfil");

    }
  }
  ngOnInit() {
  }
}
