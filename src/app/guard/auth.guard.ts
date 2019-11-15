import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServices } from 'src/services/UserServices';
import { environment } from 'src/environments/environment';
import { FirebaseApp } from '@angular/fire';
import * as firebase from 'firebase/app';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private uService: UserServices) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (!localStorage.getItem('sesion')) {
      console.log('No has iniciado sesion.');
      return this.router.navigateByUrl('/login');
    }
    console.log('Acceso Exitoso');
    if(!this.uService.user)
      this.uService.setUserJSON(localStorage.getItem('sesion'));
    return true;
  }
}
