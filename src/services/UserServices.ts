import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { user } from 'src/model/user';
import { reject, resolve } from 'q';
import { product } from 'src/model/product';
import { ProductServices } from './ProductServices';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class UserServices {

  public user: user;

    constructor(private pServices: ProductServices) {

    }

    getUser(): user{
      return this.user;
    }
    setUser(user: user){
      this.user = user;
    }
    setUserJSON(json: string){
      this.user = JSON.parse(json);
      console.log(this.user);
      this.pServices.trailUserProducts(this.user.id);

    }
    
    trailUser(id: string, router: Router){
      firebase.firestore().collection('Users').doc(id).get().then((query) =>{
        // this.user = new user();
        // this.user.id = query.id
        // this.user.
        this.user = JSON.parse(JSON.stringify(query.data()));
        this.user.id = query.id;
        // console.log(this.user);

        this.pServices.trailUserProducts(query.id);
        localStorage.setItem('sesion', JSON.stringify(this.user));
        console.log(this.user);
        router.navigateByUrl('/perfil');
      });

    }

    createUser(u: user){
      console.log(firebase.auth().currentUser);
      console.log(u);
      

      firebase.firestore().collection('Users').doc(u.id).set(JSON.parse(JSON.stringify(u)))
      .then(res =>{
        console.log("User sucessfully register");
        resolve(res);
      },
      err =>{
        firebase.auth().currentUser.delete().then((res)=>{
          console.log("deleted");
        });
        reject(err);
      });
    }

    updateUser(u: user){
      try {
        firebase.initializeApp(environment.firebase);
    } catch (error) {
        
    }
      firebase.firestore().collection('Users').doc(u.id).set(JSON.parse(JSON.stringify(u)))
      .then(res =>{
        this.user = u;
        console.log("User sucessfully updated");
        console.log(u);
        localStorage.setItem('sesion', JSON.stringify(u));
        resolve(res);
      },
      err =>{
        reject(err);
      });    
    }



}
