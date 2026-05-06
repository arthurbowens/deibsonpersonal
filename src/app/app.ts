import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  /** Troque pelo link completo: https://wa.me/DDI DDD número (somente dígitos) */
  readonly whatsappHref = 'https://wa.me/';
  readonly year = new Date().getFullYear();
}
