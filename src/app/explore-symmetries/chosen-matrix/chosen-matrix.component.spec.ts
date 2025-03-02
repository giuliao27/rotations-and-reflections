import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenMatrixComponent } from './chosen-matrix.component';

describe('ChosenMatrixComponent', () => {
  let component: ChosenMatrixComponent;
  let fixture: ComponentFixture<ChosenMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChosenMatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChosenMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
