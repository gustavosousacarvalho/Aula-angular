import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempleteVariablesComponent } from './templete-variables.component';

describe('TempleteVariablesComponent', () => {
  let component: TempleteVariablesComponent;
  let fixture: ComponentFixture<TempleteVariablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempleteVariablesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempleteVariablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
