import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServices } from 'src/services/UserServices';
import { user } from 'src/model/user';

@Component({
  selector: 'app-perfil-edit',
  templateUrl: './perfil-edit.page.html',
  styleUrls: ['./perfil-edit.page.scss'],
})
export class PerfilEditPage implements OnInit {
  image: any;
  
  u: user;
  constructor(private router: Router, private uServices: UserServices) {
    this.image = 'https://s3-us-west-1.amazonaws.com/malv.images/images/LhUPHDwes61dbkvaHKZBkJGeFMuV74APSn9Y0M5G.jpg';
    this.u = this.uServices.user;
   }


  ngOnInit() {
  }

  send(){
    this.uServices.updateUser(this.u);
  }

}
