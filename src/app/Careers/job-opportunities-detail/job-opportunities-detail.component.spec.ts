import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobOpportunitiesDetailComponent } from './job-opportunities-detail.component';

describe('JobOpportunitiesDetailComponent', () => {
  let component: JobOpportunitiesDetailComponent;
  let fixture: ComponentFixture<JobOpportunitiesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobOpportunitiesDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobOpportunitiesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
