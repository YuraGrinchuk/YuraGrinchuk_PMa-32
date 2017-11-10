import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HowWeComponent } from './how-we.component';

describe('HowWeComponent', () => {
  let component: HowWeComponent;
  let fixture: ComponentFixture<HowWeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HowWeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HowWeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
