import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SymmetricImagesComponent } from './symmetric-images.component';

describe('SymmetricImagesComponent', () => {
  let component: SymmetricImagesComponent;
  let fixture: ComponentFixture<SymmetricImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SymmetricImagesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SymmetricImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
