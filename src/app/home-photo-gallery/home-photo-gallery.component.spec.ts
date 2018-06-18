import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePhotoGalleryComponent } from './home-photo-gallery.component';

describe('HomePhotoGalleryComponent', () => {
  let component: HomePhotoGalleryComponent;
  let fixture: ComponentFixture<HomePhotoGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePhotoGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePhotoGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
