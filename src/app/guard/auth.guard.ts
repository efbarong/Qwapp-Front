import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('sesion')) {
      console.log('Acceso Exitoso');
      return this.router.navigateByUrl('/perfil');
    }
    console.log('No has iniciado sesion.');
    return this.router.navigateByUrl('/login');
  }
}
