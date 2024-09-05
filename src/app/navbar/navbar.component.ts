import {Component, OnInit} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  currentRoute: string;

  constructor(private router: Router) {
    this.currentRoute = this.router.url; // Set initial route
  }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentRoute = event.url;
      }
    });
  }
}
