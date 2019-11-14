import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    // Validar sesion antes de mostrar register
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/perfil');
    }
  }
}
