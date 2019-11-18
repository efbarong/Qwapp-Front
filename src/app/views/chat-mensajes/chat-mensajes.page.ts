import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-mensajes',
  templateUrl: './chat-mensajes.page.html',
  styleUrls: ['./chat-mensajes.page.scss'],
})
export class ChatMensajesPage implements OnInit {

  name: string;

  constructor(private active: ActivatedRoute) {
    this.active.params.subscribe(res => {
      console.log(res);
      this.name = res.name;
    });
  }

  ngOnInit() {

  }

}
