import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhotoComponent } from './home-photo.component';

describe('HomePhotoComponent', () => {
  let component: HomePhotoComponent;
  let fixture: ComponentFixture<HomePhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
