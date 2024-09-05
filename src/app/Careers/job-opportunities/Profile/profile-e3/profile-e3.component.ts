import { Component,OnInit  } from '@angular/core';
import {Router} from "@angular/router";
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-profile-e3',
  templateUrl: './profile-e3.component.html',
  styleUrl: './profile-e3.component.scss',
  standalone: true,
  imports: [ReactiveFormsModule, InputSwitchModule]
})
export class ProfileE3Component implements OnInit {
  constructor(private router: Router) {} // Inject Router into the component

  navigateToJobOpportunities(): void {
    this.router.navigate(['/profile-e2']); // Navigate to the correct route
  }
  formGroup: FormGroup | undefined;

  ngOnInit() {
    this.formGroup = new FormGroup({
      checked: new FormControl<boolean>(false)
    });
  }

}
