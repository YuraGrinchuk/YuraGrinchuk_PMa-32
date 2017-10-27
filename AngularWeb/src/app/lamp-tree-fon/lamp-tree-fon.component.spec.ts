import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampTreeFonComponent } from './lamp-tree-fon.component';

describe('LampTreeFonComponent', () => {
  let component: LampTreeFonComponent;
  let fixture: ComponentFixture<LampTreeFonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampTreeFonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampTreeFonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
