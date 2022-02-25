import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowInsuredComponent } from './show-insured.component';

describe('ShowInsuredComponent', () => {
  let component: ShowInsuredComponent;
  let fixture: ComponentFixture<ShowInsuredComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowInsuredComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowInsuredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
