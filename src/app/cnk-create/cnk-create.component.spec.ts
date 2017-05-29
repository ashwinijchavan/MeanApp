import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnkCreateComponent } from './cnk-create.component';

describe('CnkCreateComponent', () => {
  let component: CnkCreateComponent;
  let fixture: ComponentFixture<CnkCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnkCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnkCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
