import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixLabComponent } from './matrix-lab.component';

describe('MatrixLabComponent', () => {
  let component: MatrixLabComponent;
  let fixture: ComponentFixture<MatrixLabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MatrixLabComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MatrixLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
