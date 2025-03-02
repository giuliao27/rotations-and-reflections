import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExploreSymmetriesComponent } from './explore-symmetries.component';

describe('ExploreSymmetriesComponent', () => {
  let component: ExploreSymmetriesComponent;
  let fixture: ComponentFixture<ExploreSymmetriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ExploreSymmetriesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExploreSymmetriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
