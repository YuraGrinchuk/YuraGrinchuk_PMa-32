import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourBlocksComponent } from './four-blocks.component';

describe('FourBlocksComponent', () => {
  let component: FourBlocksComponent;
  let fixture: ComponentFixture<FourBlocksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourBlocksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourBlocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
