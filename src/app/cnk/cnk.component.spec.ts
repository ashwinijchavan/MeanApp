import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnkComponent } from './cnk.component';

describe('CnkComponent', () => {
  let component: CnkComponent;
  let fixture: ComponentFixture<CnkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
