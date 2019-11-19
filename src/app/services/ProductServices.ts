import { Injectable } from '@angular/core';
import { UserServices } from './UserServices';
import { Product } from '../models/product';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Query } from '@angular/fire/firestore';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Injectable({
    providedIn: 'root'
})

export class ProductServices {
    productList: Array<Product>;
    otherProductList: Array<Product>;
    nextPagin: Query;

    NUMBER_PAGE = 5;
    constructor() {
        this.productList = new Array();
        this.otherProductList = new Array();
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
        } catch (error) { }
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
        } catch (error) { }
        const ref = firebase.firestore().collection('Products');
        // console.log(zid + " ALV");

        ref.where('user', '==', id).get().then(res => {
            res.forEach(element => {
                // console.log(id + "     " + element.data());
                const p: Product = JSON.parse(JSON.stringify(element.data()));
                p.id = element.id;
                this.productList.push(p);
            });
        });

        this.nextPagin = ref.orderBy('date').limit(this.NUMBER_PAGE);

        this.getNextPage(id);
    }

    getNextPage(id: string) {
        if (this.nextPagin == null) {
            return;
        }
        const ref = firebase.firestore().collection('Products');
        const xd = this.nextPagin;
        this.nextPagin = null;
        xd.get().then(
            res => {
                const last = res.docs[res.docs.length - 1];
                let dif = 0;
                res.forEach(element => {
                    const p: Product = JSON.parse(JSON.stringify(element.data()));
                    p.id = element.id;
                    if (p.user !== id) {
                        this.otherProductList.push(p);
                        dif++;
                    }
                });
                if (last != null) {
                    this.nextPagin = ref.orderBy('date').startAfter(last).limit(this.NUMBER_PAGE);
                    if (dif === 0) {
                        this.getNextPage(id);
                    }
                } else {
                    this.nextPagin = null;
                }
            }
        );
    }
    updateProduct(p: Product) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) { }

        firebase.firestore().collection('Products').doc(p.id).set(p).then(
            res => {
                console.log('Product updated Sucessful');
            },
            err => {
                console.log('Error in product update');
            }
        );
    }
}
