import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeFonComponent } from './how-we-fon.component';

describe('HowWeFonComponent', () => {
  let component: HowWeFonComponent;
  let fixture: ComponentFixture<HowWeFonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeFonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
