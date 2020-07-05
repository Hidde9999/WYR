import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyrComponent } from './wyr.component';

describe('WyrComponent', () => {
  let component: WyrComponent;
  let fixture: ComponentFixture<WyrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
