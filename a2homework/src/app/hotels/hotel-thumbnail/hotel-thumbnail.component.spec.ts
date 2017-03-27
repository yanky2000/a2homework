import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelThumbnailComponent } from './hotel-thumbnail.component';

describe('HotelThumbnailComponent', () => {
  let component: HotelThumbnailComponent;
  let fixture: ComponentFixture<HotelThumbnailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HotelThumbnailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelThumbnailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
