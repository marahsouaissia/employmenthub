import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileE2Component } from './profile-e2.component';

describe('ProfileE2Component', () => {
  let component: ProfileE2Component;
  let fixture: ComponentFixture<ProfileE2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileE2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileE2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
