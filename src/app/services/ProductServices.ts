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
                this.productList.push(p);
                console.log('Product Added Sucessful');
            },
                err => {
                    console.log('Error in product creation');

                });
    }

    trailUserProducts(id: string) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {

        }
        const ref = firebase.firestore().collection('Products');
        // console.log(zid + " ALV");

        ref.where('user', '==', id).get().then(res => {
            res.forEach(element => {
                // console.log(id + "     " + element.data());
                this.productList.push(JSON.parse(JSON.stringify(element.data())));
            });
        });
    }
}
