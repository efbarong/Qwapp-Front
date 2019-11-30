import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-chat-lista',
  templateUrl: './chat-lista.page.html',
  styleUrls: ['./chat-lista.page.scss'],
})
export class ChatListaPage implements OnInit {

  constructor(private router: Router, private active: ActivatedRoute) {
  }

  ngOnInit() {
  }

  verChat(name: string) {
    this.router.navigate(['/chat-mensajes', name]);
  }
  
}
