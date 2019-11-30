import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';
import { user } from '../models/user';
import { reject, resolve } from 'q';
import { ProductServices } from './ProductServices';
import { environment } from 'src/environments/environment';
import { Exchange } from '../models/exchange';

@Injectable({
  providedIn: 'root'
})
export class ExchangeServices {

    constructor(){
    }


    createExchange(exchange: Exchange){
        firebase.firestore().collection('Exchange').add(JSON.parse(JSON.stringify(exchange)))
            .then(res => {
                console.log('Exchage make sucessfully');
            resolve(res);
            },
            err => {
                reject(err);
            });

    }

    getExchagesById(id: string): Array<Exchange>{
        let list: Array<Exchange> = new Array<Exchange>();
        let query = firebase.firestore().collection('Exchange').where("sender", "==", id);
        query.onSnapshot(function(snapshot){
            snapshot.docChanges().forEach(function(change){
                if(change.type == "added"){
                    list.push(JSON.parse(JSON.stringify(change.doc.data())));
                    list[list.length-1].id = change.doc.id;
                }
                if(change.type == "modified"){
                    console.log("EXCHANGE CAMBIADO");
                    let del: Exchange = JSON.parse(JSON.stringify(change.doc.data()));
                    del.id = change.doc.id;
                    list.forEach(e =>{
                        if(e.id == del.id){
                            e.state = del.state;
                        }
                    });

                }
                if(change.type == 'removed'){
                    //console.log("EXCHANGE ELIMINADO");
                    
                    let del = JSON.parse(JSON.stringify(change.doc.data()));
                    list.splice(list.indexOf(del), 1);
                }
            });
        });
        return list;
    }

    getIncomingExchagesById(id: string): Array<Exchange>{
        let list: Array<Exchange> = new Array<Exchange>();
        let query = firebase.firestore().collection('Exchange').where("receiver", "==", id);
        query.onSnapshot(function(snapshot){
            snapshot.docChanges().forEach(function(change){
                if(change.type == "added"){
                    list.push(JSON.parse(JSON.stringify(change.doc.data())));
                    list[list.length-1].id = change.doc.id;
                }
                if(change.type == "modified"){
                    console.log("EXCHANGE CAMBIADO");
                    
                    let del: Exchange = JSON.parse(JSON.stringify(change.doc.data()));
                    del.id = change.doc.id;
                    list.forEach(e =>{
                        if(e.id == del.id){
                            console.log("FIND");
                            
                            e.state = del.state;
                        }
                    });

                }
                if(change.type == 'removed'){
                    //console.log("EXCHANGE ELIMINADO");
                    
                    let del = JSON.parse(JSON.stringify(change.doc.data()));
                    list.splice(list.indexOf(del), 1);
                }
            });
        });
        return list;
    }

    setExchangeById(id:string){
        firebase.firestore().collection('Exchange').doc(id).get().then(
            res =>{
                let e: Exchange = JSON.parse(JSON.stringify(res.data()));                
                e.state = false;
                firebase.firestore().collection('Exchange').doc(id).update(e);
            }
        );
    }

    deleteExchangeById(id: string){
        firebase.firestore().collection('Exchange').doc(id).delete();
    }
}
