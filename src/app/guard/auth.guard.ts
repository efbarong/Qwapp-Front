import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate, Router } from '@angular/router';
import { UserServices } from 'src/app/services/UserServices';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private uService: UserServices) {
  }

  canActivate() {
    if (!localStorage.getItem('sesion')) {
      console.log('No has iniciado sesion.');
      return this.router.navigateByUrl('/login');
    }
    console.log('Acceso Exitoso');
    if (!this.uService.user) {
      this.uService.setUserJSON(localStorage.getItem('sesion'));
    }
    return true;
  }
}
