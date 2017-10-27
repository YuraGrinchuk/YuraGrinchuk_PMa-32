import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployersFonComponent } from './employers-fon.component';

describe('EmployersFonComponent', () => {
  let component: EmployersFonComponent;
  let fixture: ComponentFixture<EmployersFonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployersFonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployersFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
