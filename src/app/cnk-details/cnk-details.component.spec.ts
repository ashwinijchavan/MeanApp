import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CnkDetailsComponent } from './cnk-details.component';

describe('CnkDetailsComponent', () => {
  let component: CnkDetailsComponent;
  let fixture: ComponentFixture<CnkDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CnkDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CnkDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
