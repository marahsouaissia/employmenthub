import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-profile-e1',
  templateUrl: './profile-e1.component.html',
  styleUrls: ['./profile-e1.component.scss']
})
export class ProfileE1Component {

  constructor(private router: Router) {} // Inject Router into the component

  navigateToJobOpportunities(): void {
    this.router.navigate(['/job_opportunities']); // Navigate to the correct route
  }
}
