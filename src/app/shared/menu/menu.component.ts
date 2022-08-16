import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styles: [
  ]
})
export class MenuComponent implements OnInit {
  items: MenuItem[] = [];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Pipes Angular',
        icon:'pi pi-Desktop',
        items:[
          {
            label:'Texto y Fechas',
            icon:'pi pi-aling-left',
            routerLink:'/'
          },
          {
            label:'Mumeros',
            icon:'pi pi-dollar',
            routerLink:'numeros'
          },
          {
            label:'No comunes',
            icon:'pi pi-globe',
            routerLink:'no-comunes'
          }
        ]
      },
      {
        label:'Personalizados',
        icon:'pi pi-cog',
        routerLink:'ordenar'
      }
    ];
  }
}
