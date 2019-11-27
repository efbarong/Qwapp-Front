import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthServices } from 'src/app/services/AuthServices';
import { UserServices } from 'src/app/services/UserServices';
import { Router } from '@angular/router';
import { ProductServices } from 'src/app/services/ProductServices';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Perfil',
      url: '/perfil',
      icon: 'person'
    },
    {
      title: 'Publicar',
      url: '/producto-create/2',
      icon: 'add'
    },
    {
      title: 'Itercambiar',
      url: '/intercambio',
      icon: 'swap'
    },
    {
      title: 'En proceso',
      url: '/proceso-list',
      icon: 'hammer'
    },
    {
      title: 'Chats',
      url: '/chat-lista',
      icon: 'chatboxes'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private auth: AuthServices,
    private uServices: UserServices,
    private pProduct: ProductServices,
    private router: Router,
  ) {
    this.initializeApp();

  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.statusBar.show();
      this.splashScreen.hide();
    });
  }

  isLogin(): boolean {
    if (localStorage.getItem('sesion')) {
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('sesion');
    this.auth.doLogout();
    this.uServices.user = null;
    this.pProduct.productList = new Array();
    console.log('LIST');
    console.log(this.pProduct);


    this.router.navigateByUrl('/login');
  }
}
