import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMatrixComponent } from './choose-matrix.component';

describe('ChooseMatrixComponent', () => {
  let component: ChooseMatrixComponent;
  let fixture: ComponentFixture<ChooseMatrixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChooseMatrixComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseMatrixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
