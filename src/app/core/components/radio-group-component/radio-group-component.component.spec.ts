import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadioGroupComponentComponent } from './radio-group-component.component';

describe('RadioGroupComponentComponent', () => {
  let component: RadioGroupComponentComponent;
  let fixture: ComponentFixture<RadioGroupComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadioGroupComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RadioGroupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
