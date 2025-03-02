import {
  Component,
  EventEmitter,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-choose-matrix',
  templateUrl: './choose-matrix.component.html',
  styleUrl: './choose-matrix.component.scss',
})
export class ChooseMatrixComponent {
  @Output() matrixChange = new EventEmitter<number[][]>();
  @Output() matrixTypeChange = new EventEmitter<number>();
  @Output() angleChange = new EventEmitter<number>();
  segmentAngle: number = 90;
  isDragging: boolean = false;
  firstDragging: boolean = false;
  vector1: number[] = [1, 0];
  vector2: number[] = [0, 1];
  matrix: number[][] = [
    [1, 0],
    [0, 1],
  ];
  matrixType: number = 0;
  angle: number = 0;
  fromRotate: boolean = false;
  angleToDisplay: number = 0;
  highlight: number = 0;

  onMouseDown(event: MouseEvent) {
    this.isDragging = true;
    this.firstDragging = true;
  }

  onMouseMove(event: MouseEvent) {
    this.fromRotate = false;
    if (this.isDragging) {
      const rect = (event.currentTarget as Element).getBoundingClientRect();
      const x = event.clientX - rect.left - rect.width / 2;
      const y = event.clientY - rect.top - rect.height / 2;
      this.segmentAngle = Math.atan2(y, x) * (180 / Math.PI) + 90;
      this.angle = Math.atan2(y, x);
      this.angle =
        ((360 - this.angle * (180 / Math.PI)) % 360) * (Math.PI / 180);
      this.angleToDisplay = this.angle * (180 / Math.PI);
      this.vector1 = [Math.cos(this.angle), Math.sin(this.angle)];
      this.chooseSecondVector(this.matrixType);
    }
  }

  onMouseUp(event: MouseEvent) {
    this.isDragging = false;
  }

  chooseSecondVector(n: number) {
    this.matrixType = n;
    const m1 = [Math.cos(-this.angle), Math.sin(-this.angle)];
    if (n == 1) {
      this.vector2 = [-Math.sin(this.angle), Math.cos(this.angle)];
      const m2 = [Math.sin(-this.angle), -Math.cos(-this.angle)];
      this.matrix = [m1, m2];
    } else {
      this.vector2 = [Math.sin(this.angle), -Math.cos(this.angle)];
      const m2 = [Math.sin(-this.angle), -Math.cos(-this.angle)];
      this.matrix = [m1, m2];
    }

    this.matrixChange.emit(this.matrix);
    this.angleChange.emit(this.angle);
    this.matrixTypeChange.emit(this.matrixType);
  }

  rotateOf15() {
    this.fromRotate = true;
    this.firstDragging = true;
    this.angle = this.angle + Math.PI / 12;
    this.segmentAngle = -this.angle * (180 / Math.PI) + 90;
    this.angleToDisplay = (this.angle * (180 / Math.PI)) % 360;
    this.vector1 = [Math.cos(this.angle), Math.sin(this.angle)];
    this.chooseSecondVector(this.matrixType);
  }

  reload() {
    this.firstDragging = false;
    this.segmentAngle = 90;
    this.vector1 = [1, 0];
    this.vector2 = [0, 1];
    this.matrix = [
      [1, 0],
      [0, 1],
    ];
    this.angle = 0;
    this.angleToDisplay = 0;
    this.matrixType = 0;
    this.matrixChange.emit(this.matrix);
    this.angleChange.emit(this.angle);
    this.matrixTypeChange.emit(this.matrixType);
  }
}
