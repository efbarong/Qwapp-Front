import { Injectable } from '@angular/core';
import { UserServices } from './UserServices';
import { Product } from '../models/product';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})

export class ProductServices {
    productList: Array<Product>;
    constructor() {
        this.productList = new Array();
    }

    createProduct(p: Product) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {

        }
        firebase.firestore().collection('Products').add(JSON.parse(JSON.stringify(p)))
            .then(res => {
                p.id = res.id;
                this.productList.push(p);
                console.log('Product Added Sucessful');
            },
                err => {
                    console.log('Error in product creation');

                });
    }

    deleteProduct(id: string) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {}
        firebase.firestore().collection('Products').doc(id).delete()
        .then(res => {
            console.log('Product deleted Sucessful');
        },
        err => {
            console.log('Error in product delete');
        });
    }


    trailUserProducts(id: string) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {}
        const ref = firebase.firestore().collection('Products');
        // console.log(zid + " ALV");

        ref.where('user', '==', id).get().then(res => {
            res.forEach(element => {
                // console.log(id + "     " + element.data());
                let p: Product = JSON.parse(JSON.stringify(element.data()));
                p.id = element.id;
                this.productList.push(p);
            });
        });
    }

    updateProduct(p: Product){
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {}

        firebase.firestore().collection('Products').doc(p.id).set(p).then(
            res =>{
                console.log("Product updated Sucessful");
            },
            err =>{
                console.log("Error in product update");
            }
        );
    }
}
