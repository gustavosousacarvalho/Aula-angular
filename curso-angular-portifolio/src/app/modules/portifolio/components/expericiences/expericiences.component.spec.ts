import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpericiencesComponent } from './expericiences.component';

describe('ExpericiencesComponent', () => {
  let component: ExpericiencesComponent;
  let fixture: ComponentFixture<ExpericiencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExpericiencesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExpericiencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
