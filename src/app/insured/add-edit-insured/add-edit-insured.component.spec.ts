import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditInsuredComponent } from './add-edit-insured.component';

describe('AddEditInsuredComponent', () => {
  let component: AddEditInsuredComponent;
  let fixture: ComponentFixture<AddEditInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
