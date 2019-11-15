import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;

  constructor(private router: Router) {

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
  }

  ngOnInit() {
    // Validar sesion antes de mostrar register
    if (localStorage.getItem('sesion')) {
      this.router.navigateByUrl('/perfil');
    }
  }
}
