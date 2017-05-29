import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnkEditComponent } from './cnk-edit.component';

describe('CnkEditComponent', () => {
  let component: CnkEditComponent;
  let fixture: ComponentFixture<CnkEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnkEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnkEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
