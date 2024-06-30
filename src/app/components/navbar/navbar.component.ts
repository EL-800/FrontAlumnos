import { Component } from '@angular/core';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem, PrimeIcons } from 'primeng/api';
import { CardModule } from 'primeng/card';
@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    TabMenuModule,
    CardModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent{

  items: MenuItem[];

  constructor(){

    this.items  = [
      {
        label: 'Home',
        icon : PrimeIcons.HOME,
        routerLink : '/home'
      },
      {
        label: 'Crud Alumnos',
        icon : PrimeIcons.USER,
        routerLink : '/alumnos'
      }      
    ]
  }
}
