import { Component, OnInit } from '@angular/core';

export interface NavItem { 
  href: string; 
  label: string; 
  active: boolean; 
} 

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})

export class NavBarComponent implements OnInit {

  appName: string = "Angular eCommerce";

  navItems: NavItem[] = [
    {href: "#", label: "Home", active: true},
    {href: "#", label: "Products", active: false},
    {href: "#", label: "Checkout", active: false},
    {href: "#", label: "Sign out", active: false},
  ];

  constructor() { }

  ngOnInit() {
  }

}
