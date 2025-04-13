import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempletControlFlowComponent } from './templet-control-flow.component';

describe('TempletControlFlowComponent', () => {
  let component: TempletControlFlowComponent;
  let fixture: ComponentFixture<TempletControlFlowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempletControlFlowComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TempletControlFlowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
