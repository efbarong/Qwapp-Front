import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { user } from '../../models/user';
import { AuthServices } from 'src/app/services/AuthServices';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private auth: AuthServices) {

    this.registerForm = new FormGroup({
      nombre: new FormControl('', Validators.required),
      edad: new FormControl('', Validators.required),
      ciudad: new FormControl('', Validators.required),
      localidad: new FormControl('', Validators.required),
      direction: new FormControl('', Validators.required),
      phone: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      pass1: new FormControl('', Validators.required),
      pass2: new FormControl('', Validators.required),
      check: new FormControl('', Validators.required)
    });

  }

  onSubmit() {
    console.log(this.registerForm.value);
    const v = this.registerForm.value;
    let e: user;
    e = new user();
    e.name = v.nombre;
    e.email = v.correo;
    e.age = v.edad;
    e.locality = v.ciudad;
    e.city = v.localidad;
    e.direction = v.direction;
    e.phone = v.phone;
    e.numberChanges = 0;

    if (v.pass1 === v.pass2) {
      this.auth.doRegister(e, v.pass1).then(res => {
        if (res) {
          this.router.navigateByUrl('/login');
        }
      });
    } else {
      console.log('Las contraseñas no coinciden.');
    }

  }

  ngOnInit() {
    // Validar sesion antes de mostrar register
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/home');
    }
  }
}
