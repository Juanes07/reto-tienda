import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  items!: MenuItem[];

  activeItem!: MenuItem;

  constructor() {}

  ngOnInit(): void {
    this.items = [
      {
        label: 'myShop', icon:'pi pi-shopping-bag', disabled:true
      },
      { label: 'Home', icon: 'pi pi-fw pi-home', routerLink: 'productos' },
      {
        label: 'About', routerLink:'productos'
      }
    ];
    this.activeItem = this.items[0];
  }
}
