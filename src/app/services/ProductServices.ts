import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import * as firebase from 'firebase/app';
import { environment } from 'src/environments/environment';
import { Query } from '@angular/fire/firestore';
import { element } from 'protractor';

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

    createProduct(p: Product, imagesList: Array<String>) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) {

        }
        firebase.firestore().collection('Products').add(JSON.parse(JSON.stringify(p)))
            .then(res => {
                p.id = res.id;
                this.productList.push(p);
                imagesList.forEach(element => {
                    this.uploadImage(element, p.id);
                });
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
                firebase.firestore().collection('Exchange').where("productSend.id", "==", id).get().then(res => {
                    res.forEach(element => {
                        firebase.firestore().collection('Exchange').doc(element.id).delete();
                    });
                });
                firebase.firestore().collection('Exchange').where("productReceiver.id", "==", id).get().then(res => {
                    res.forEach(element => {
                        firebase.firestore().collection('Exchange').doc(element.id).delete();
                    });
                });
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
        ref.where('user', '==', id).get().then(res => {
            res.forEach(element => {
                const p: Product = JSON.parse(JSON.stringify(element.data()));
                p.id = element.id;
                this.productList.push(p);
            });
        });

        this.nextPagin = ref.orderBy('date', 'desc').limit(this.NUMBER_PAGE * 2);

        this.getNextPage(id);
    }

    getNextPage(id: string) {
        this.getNextPageLimit(id, this.NUMBER_PAGE);
    }

    getNextPageLimit(id: string, times: number) {
        if (this.nextPagin == null) {
            return;
        }
        const ref = firebase.firestore().collection('Products');
        const xd = this.nextPagin;
        this.nextPagin = null;
        xd.get().then(
            res => {
                let last = null;
                res.forEach(element => {
                    if (!times) {
                        return false;
                    }
                    const p: Product = JSON.parse(JSON.stringify(element.data()));
                    p.id = element.id;
                    if (p.user !== id) {
                        this.otherProductList.push(p);
                        times--;
                        last = element;
                    }

                });

                if (last != null) {
                    this.nextPagin = ref.orderBy('date', 'desc').startAfter(last).limit(this.NUMBER_PAGE * 2);
                    if (times !== 0) {
                        this.getNextPageLimit(id, times);
                    }
                } else {
                    this.nextPagin = null;
                }
            }
        );
    }

    restartPage(id: string) {
        const ref = firebase.firestore().collection('Products');
        this.otherProductList = new Array();
        this.nextPagin = ref.orderBy('date', 'desc').limit(this.NUMBER_PAGE * 2);
        this.getNextPage(id);
    }

    hasMorePage() {
        return this.nextPagin != null;
    }

    updateProduct(p: Product) {
        try {
            firebase.initializeApp(environment.firebase);
        } catch (error) { }

        firebase.firestore().collection('Products').doc(p.id).set(p).then(
            res => {
                console.log("UPDATE PRODUCT ALV BY IMAGE");
                
                console.log(res);
            },
            err => {
                console.log('Error in product update');
            }
        );

    }
    uploadImage(imageURI, id: string) {
        let p: Product;
        this.productList.forEach(element => {
            if (element.id === id) {
                p = element;
            }
        });
        return new Promise<any>((resolve, reject) => {
            const storageRef = firebase.storage().ref();
            const imageRef = storageRef.child('ProductImages').child(id + imageURI);
            this.encodeImageUri(imageURI, function(image64) {
                imageRef.putString(image64, 'data_url')
                    .then(snapshot => {
                        console.log("Link: " + snapshot.downloadURL);
                        
                        p.images.push(snapshot.downloadURL);
                        this.updateProduct(p);

                        resolve(snapshot.downloadURL);
                    }, err => {
                        reject(err);
                    });
            });
        });
    }

    encodeImageUri(imageUri, callback) {
        const c = document.createElement('canvas');
        const ctx = c.getContext('2d');
        const img = new Image();
        img.onload = function() {
            const aux: any = this;
            c.width = aux.width;
            c.height = aux.height;
            ctx.drawImage(img, 0, 0);
            const dataURL = c.toDataURL('image/jpeg');
            callback(dataURL);
        };
        img.src = imageUri;
    }
}
