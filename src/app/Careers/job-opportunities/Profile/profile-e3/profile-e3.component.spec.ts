import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileE3Component } from './profile-e3.component';

describe('ProfileE3Component', () => {
  let component: ProfileE3Component;
  let fixture: ComponentFixture<ProfileE3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileE3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileE3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
