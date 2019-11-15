import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthServices } from 'src/services/AuthServices';
import { User } from 'firebase';
import { UserServices } from 'src/services/UserServices';
import { Router } from '@angular/router';
import { ProductServices } from 'src/services/ProductServices';
import { ThrowStmt } from '@angular/compiler';

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
      icon: 'home'
    },
    {
      title: 'Editar Perfil',
      url: '/perfil-edit',
      icon: 'home'
    },
    {
      title: 'Ver Producto',
      url: '/producto',
      icon: 'home'
    },
    {
      title: 'Editar Producto',
      url: '/producto-edit',
      icon: 'home'
    },
    {
      title: 'Ver Chat',
      url: '/chat-mesaje',
      icon: 'home'
    },
    {
      title: 'Chats',
      url: '/chat-lista',
      icon: 'home'
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

  logout(){
    localStorage.removeItem('sesion');
    this.auth.doLogout(); 
    this.uServices.user = null;
    this.pProduct.productList = new Array();
    console.log("LIST");
    console.log(this.pProduct);
    
    
    this.router.navigateByUrl("/login");
  }
}
