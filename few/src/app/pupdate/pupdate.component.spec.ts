import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PupdateComponent } from './pupdate.component';

describe('PupdateComponent', () => {
  let component: PupdateComponent;
  let fixture: ComponentFixture<PupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
