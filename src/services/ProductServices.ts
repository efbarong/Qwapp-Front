import { Injectable } from "@angular/core";
import { UserServices } from './UserServices';
import { product } from 'src/model/product';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
  })

export class ProductServices {
    productList: Array<product>;
    constructor(){
        this.productList = new Array();
    }

    createProduct(p: product){
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {
            
        }
        firebase.firestore().collection('Products').add(JSON.parse(JSON.stringify(p)))
        .then(res =>{
            this.productList.push(p);
            console.log("Product Added Sucessful");
        },
        err => {
            console.log("Error in product creation");
            
        });     
      }
  

      trailUserProducts(id: string){
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {
            
        }
        var ref = firebase.firestore().collection('Products');
        ref.where('user' , '==', id);
        ref.get().then( res =>{
            res.forEach(element => {
               this.productList.push(JSON.parse(JSON.stringify(element.data()))); 
            });
        });
      }

}