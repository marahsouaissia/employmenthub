import { Component } from '@angular/core';
import {Router} from "@angular/router";
import { DropdownModule } from 'primeng/dropdown';

interface City {
  name: string;
  code: string;
}


@Component({
  selector: 'app-profile-e2',
  templateUrl: './profile-e2.component.html',
  styleUrl: './profile-e2.component.scss',

})
export class ProfileE2Component {
  cities: City[] | undefined;

  selectedCity: City | undefined;

  ngOnInit() {
    this.cities = [
      { name: 'Sousse', code: 'S' },
      { name: 'Tunis', code: 'T' },
      { name: 'Nabeul', code: 'N' },
    ];
  }
  constructor(private router: Router) {} // Inject Router into the component

  navigateToJobOpportunities(): void {
    this.router.navigate(['/profile-e1']); // Navigate to the correct route
  }



}
