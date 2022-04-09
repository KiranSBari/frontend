import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolicyinsertingComponent } from './policyinserting.component';

describe('PolicyinsertingComponent', () => {
  let component: PolicyinsertingComponent;
  let fixture: ComponentFixture<PolicyinsertingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PolicyinsertingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PolicyinsertingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
