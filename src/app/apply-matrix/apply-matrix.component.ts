import { Component, Input } from '@angular/core';
import { MatricesService } from '../services/matrices.service';
import { random } from 'mathjs';

@Component({
  selector: 'app-apply-matrix',
  templateUrl: './apply-matrix.component.html',
  styleUrl: './apply-matrix.component.scss',
})
export class ApplyMatrixComponent {
  @Input() matrix: number[][] = [
    [1, 0],
    [0, 1],
  ];
  @Input() matrixType?: number;
  @Input() angle: number = 0;
  transformationMatrix: number[][] = this.matrix;
  stringMatrix?: string;
  currentAngle: number = 0;
  image: any = { src: '../../assets/images/mycircle.svg' };
  random: number[][] = [
    [1, 0],
    [0, 1],
  ];
  flipped: boolean = false;

  constructor(private readonly matricesService: MatricesService) {}

  translateMatrix(m: number[][]) {
    this.stringMatrix = `matrix(${m[0][0]}, ${m[0][1]}, ${m[1][0]}, ${
      m[1][1]
    }, 0, 0) rotate(${-this.currentAngle * (180 / Math.PI)}deg) matrix(${
      this.random[0][0]
    }, ${this.random[0][1]}, ${this.random[1][0]}, ${this.random[1][1]}, 0, 0)`;
  }

  transformImage() {
    if (this.matrixType == 1) {
      const rotationStep = this.angle % (2 * Math.PI);
      if (this.flipped) {
        this.currentAngle = this.currentAngle =
          this.currentAngle - rotationStep;
      } else {
        this.currentAngle = this.currentAngle + rotationStep;
      }
    } else {
      this.flipped = !this.flipped;
      this.transformationMatrix = this.matricesService.multiplyMatrices(
        this.transformationMatrix,
        this.matrix
      );
    }
    this.translateMatrix(this.transformationMatrix);
  }

  transformImageRandom() {
    this.random = [
      [Math.random(), Math.random()],
      [Math.random(), Math.random()],
    ];
    this.translateMatrix(this.transformationMatrix);
  }

  reload() {
    this.transformationMatrix = [
      [1, 0],
      [0, 1],
    ];
    this.currentAngle = 0;
    this.flipped = false;
    this.random = [
      [1, 0],
      [0, 1],
    ];
    this.translateMatrix(this.transformationMatrix);
  }
}
