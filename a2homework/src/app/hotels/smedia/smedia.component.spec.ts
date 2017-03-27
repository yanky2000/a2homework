import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmediaComponent } from './smedia.component';

describe('SmediaComponent', () => {
  let component: SmediaComponent;
  let fixture: ComponentFixture<SmediaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmediaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
