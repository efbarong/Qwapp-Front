import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { resolve } from 'url';
import { reject } from 'q';

@Injectable({
    providedIn: 'root'
  })

export class UserServices {

  public user: user;

    constructor() {
    }

    getUser(): user{
      return this.user;
    }
    setUser(user: user){
      this.user = user;
    }
    
    trailUser(id: string, router: Router){
      firebase.firestore().collection('Users').doc(id).get().then((query) =>{
        // this.user = new user();
        // this.user.id = query.id
        // this.user.
        this.user = JSON.parse(JSON.stringify(query.data()));
        this.user.id = query.id;
        console.log(this.user);
      });
      if(router)
        router.navigateByUrl('/perfil');
    }
}
