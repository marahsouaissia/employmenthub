import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileE1Component } from './profile-e1.component';

describe('ProfileE1Component', () => {
  let component: ProfileE1Component;
  let fixture: ComponentFixture<ProfileE1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProfileE1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProfileE1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
