import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonLayComponent } from './common-lay.component';

describe('CommonLayComponent', () => {
  let component: CommonLayComponent;
  let fixture: ComponentFixture<CommonLayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonLayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonLayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
