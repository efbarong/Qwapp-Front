import { Injectable } from "@angular/core";
import * as firebase from 'firebase/app';
// import { FirebaseService } from './firebase.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { UserServices } from './UserServices';
import { user } from 'src/model/user';
import { resolve } from 'url';

@Injectable({
    providedIn: 'root'
  })

export class AuthServices {
    private authState: any;
    private persistence;
    constructor(
        // private firebaseServices: FirebaseService,
        public afAuth: AngularFireAuth,
        public uServices: UserServices) {
            this.persistence = firebase.auth.Auth.Persistence.LOCAL;
            this.afAuth.auth.setPersistence(firebase.auth.Auth.Persistence.LOCAL);
            this.afAuth.authState.subscribe((auth) => {
                this.authState = auth;
            });
        }
    
    doLogin(email, password, router: Router){
        return new Promise<any>((resolve, reject)  => {
            firebase.auth().signInWithEmailAndPassword(email, password).
            then(
                res =>{ 
                    this.uServices.trailUser(res.user.uid, router);
                    resolve(res);},
                err => {
                    reject(err);
                    console.log("FALLO");

                })
        });
    }

    doRegister(user: user, password: string){
        return new Promise<any>((resolve, reject) =>{
            firebase.auth().createUserWithEmailAndPassword(user.email, password)
            .then(
                res =>{
                    user.id = res.user.uid;
                    this.uServices.createUser(user);
                    resolve(res);
                },
                err =>{
                    reject(err);
                }
            );
        })

    }

    deleteUser(user: user){
    }

    getUser(): any{
        return firebase.auth().currentUser;    
    }
}
