import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-chosen-matrix',
  templateUrl: './chosen-matrix.component.html',
  styleUrl: './chosen-matrix.component.scss',
})
export class ChosenMatrixComponent {
  @Input() angle: number = 0;
  @Input() transformation: string = 'identity';
}
