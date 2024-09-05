import {Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent implements OnInit {
  private map: L.Map | undefined;

  constructor() {}

  ngOnInit(): void {
    // Assurez-vous que le code est exécuté uniquement dans le navigateur
    if (typeof window !== 'undefined') {
      this.initMap();
    }
  }

  private initMap(): void {
    // Dynamically import leaflet inside the initMap method
    import('leaflet').then(L => {
      this.map = L.map('map').setView([51.505, -0.09], 13);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);


    });
  }


}
