import { Injectable } from '@angular/core';
import * as math from 'mathjs';

@Injectable({
  providedIn: 'root',
})
export class MatricesService {
  constructor() {}

  multiplyMatrices(matrix1: number[][], matrix2: number[][]) {
    return math.multiply(matrix1, matrix2);
  }
}
