import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';
import { user } from 'src/model/user';
import { AuthServices } from 'src/services/AuthServices';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router, private auth: AuthServices) {

    this.registerForm = new FormGroup({
      correo : new FormControl('', Validators.required),
      nombre : new FormControl('', Validators.required),
      edad : new FormControl('', Validators.required),
      departamento : new FormControl('', Validators.required),
      ciudad : new FormControl('', Validators.required),
      pass1 : new FormControl('', Validators.required),
      pass2 : new FormControl('', Validators.required),
    });

  }

  onSubmit() {
    console.log(this.registerForm.value);
    let v = this.registerForm.value;
    
    var e: user;
    e = new user()
    e.name = v.nombre;
    e.email = v.correo;
    e.age = v.edad;
    e.locality = v.departamento;
    e.city = v.ciudad;
    e.numberChanges = 0;
    
    this.auth.doRegister(e, v.pass1);
  }

  ngOnInit() {
    // Validar sesion antes de mostrar register
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/perfil');
    }
  }
}
