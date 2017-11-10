import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LampTreeComponent } from './lamp-tree.component';

describe('LampTreeComponent', () => {
  let component: LampTreeComponent;
  let fixture: ComponentFixture<LampTreeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LampTreeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LampTreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
