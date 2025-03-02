import { Component } from '@angular/core';

@Component({
  selector: 'app-matrix-lab',
  templateUrl: './matrix-lab.component.html',
  styleUrl: './matrix-lab.component.scss',
})
export class MatrixLabComponent {
  matrix: number[][] = [
    [1, 0],
    [0, 1],
  ];
  matrixType?: number;
  angle: number = 0;
}
