import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatricesService } from '../services/matrices.service';
import { Subscription, interval } from 'rxjs';

@Component({
  selector: 'app-kolakoski-dance',
  templateUrl: './kolakoski-dance.component.html',
  styleUrl: './kolakoski-dance.component.scss',
})
export class KolakoskiDanceComponent {
  kolakoski: number[] = [
    1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2, 1, 2, 1, 1, 2, 1,
    2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 1, 1, 2,
    1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 1, 2, 2,
    1, 2, 1, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 2, 2, 1, 2, 2, 1, 1, 2, 1, 1, 2, 2,
  ];
  currentIndex = 0;
  currentString = '';
  currentAngle: number = 0;
  orientation: number = 1;

  private intervalSubscription?: Subscription;

  constructor(private readonly matricesService: MatricesService) {}

  ngOnInit() {
    const source = interval(1000);
    this.intervalSubscription = source.subscribe(() => {
      this.startAnimation();
    });
  }

  makeMatrix() {
    if (
      this.currentIndex != 0 &&
      this.kolakoski[this.currentIndex] != this.kolakoski[this.currentIndex - 1]
    ) {
      this.orientation = this.orientation * -1;
      this.currentString = `rotate(${this.currentAngle}deg) scaleX(${this.orientation})`;
    } else {
      this.currentAngle = this.currentAngle - 30;
      this.currentString = `rotate(${this.currentAngle}deg) scaleX(${this.orientation})`;
    }
  }

  startAnimation() {
    this.currentIndex = (this.currentIndex + 1) % this.kolakoski.length;
    this.makeMatrix();
  }

  ngOnDestroy() {
    this.intervalSubscription?.unsubscribe();
  }
}
