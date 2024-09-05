import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { AproposComponent } from './apropos/apropos.component';
import {NgOptimizedImage} from "@angular/common";
import { ApplicationsComponent } from './Careers/applications/applications.component';
import { JobOpportunitiesComponent } from './Careers/job-opportunities/job-opportunities.component';
import { JobOpportunitiesDetailComponent } from './Careers/job-opportunities-detail/job-opportunities-detail.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {IconFieldModule} from "primeng/iconfield";
import {InputIconModule} from "primeng/inputicon";
import {InputTextModule} from "primeng/inputtext";
import {PaginatorModule} from "primeng/paginator";
import {FlexLayoutModule} from "@angular/flex-layout";
import { JobCardComponent } from './Careers/job-opportunities/job-card/job-card.component';
import { ProfileE1Component } from './Careers/job-opportunities/Profile/profile-e1/profile-e1.component';
import { ProfileE2Component } from './Careers/job-opportunities/Profile/profile-e2/profile-e2.component';
import { ProfileE3Component } from './Careers/job-opportunities/Profile/profile-e3/profile-e3.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    AproposComponent,
    ApplicationsComponent,
    JobOpportunitiesComponent,
    JobOpportunitiesDetailComponent,
    JobCardComponent,
    ProfileE1Component,
    ProfileE2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgOptimizedImage,
    BrowserAnimationsModule,
    IconFieldModule,
    InputIconModule,
    InputTextModule,
    PaginatorModule,
    FlexLayoutModule,
    ProfileE3Component,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
