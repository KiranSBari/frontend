import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetcomplaintComponent } from './getcomplaint.component';

describe('GetcomplaintComponent', () => {
  let component: GetcomplaintComponent;
  let fixture: ComponentFixture<GetcomplaintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetcomplaintComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetcomplaintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
