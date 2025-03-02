import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KolakoskiDanceComponent } from './kolakoski-dance.component';

describe('KolakoskiDanceComponent', () => {
  let component: KolakoskiDanceComponent;
  let fixture: ComponentFixture<KolakoskiDanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KolakoskiDanceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(KolakoskiDanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
