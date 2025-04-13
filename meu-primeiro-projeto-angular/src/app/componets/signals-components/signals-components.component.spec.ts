import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignalsComponentsComponent } from './signals-components.component';

describe('SignalsComponentsComponent', () => {
  let component: SignalsComponentsComponent;
  let fixture: ComponentFixture<SignalsComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignalsComponentsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SignalsComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
