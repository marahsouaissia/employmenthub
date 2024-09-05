import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AproposComponent} from "./apropos/apropos.component";
import {application} from "express";
import {ApplicationsComponent} from "./Careers/applications/applications.component";
import { JobOpportunitiesComponent } from "./Careers/job-opportunities/job-opportunities.component";
import { JobOpportunitiesDetailComponent } from "./Careers/job-opportunities-detail/job-opportunities-detail.component";
import {ProfileE1Component} from "./Careers/job-opportunities/Profile/profile-e1/profile-e1.component";
import {ProfileE2Component} from "./Careers/job-opportunities/Profile/profile-e2/profile-e2.component";
import {ProfileE3Component} from "./Careers/job-opportunities/Profile/profile-e3/profile-e3.component";



const routes: Routes = [
  {path: '' , component : HomeComponent},
  {path: 'about-us' , component : AproposComponent},
  {path: 'applications' , component : ApplicationsComponent},
  {path: 'job_opportunities' , component : JobOpportunitiesComponent},
  {path: 'job/:id', component: JobOpportunitiesDetailComponent },
  {path: 'profile-e1' , component : ProfileE1Component},
  {path: 'profile-e2' , component : ProfileE2Component},
  {path: 'profile-e3' , component : ProfileE3Component},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
