import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplyMatrixComponent } from './apply-matrix.component';

describe('ApplyMatrixComponent', () => {
  let component: ApplyMatrixComponent;
  let fixture: ComponentFixture<ApplyMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ApplyMatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApplyMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
