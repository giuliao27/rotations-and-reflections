import { Component } from '@angular/core';
import { SymmetricImage } from '../models/symmetric-image.model';
import { MatricesService } from '../services/matrices.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-explore-symmetries',
  templateUrl: './explore-symmetries.component.html',
  styleUrl: './explore-symmetries.component.scss',
})
export class ExploreSymmetriesComponent {
  image: SymmetricImage = {
    group: 'Polygons',
    name: 'Triangle',
    src: '../../../assets/images/triangle.svg',
    n: 3,
    reflection: true,
    firstReflectionAngle: -60,
  };
  rotations: number[] = [];
  reflections: number[] = [];
  pointGroupName?: string;
  currentAngle: number = 0;
  reflectionMatrix: number[][] = [
    [1, 0],
    [0, 1],
  ];
  stringMatrix?: string;
  flipped?: boolean = false;
  transformation: string = 'identity';
  angle: number = 0;
  firstTransformation: boolean = false;

  constructor(
    private readonly matricesService: MatricesService,
    private readonly formBuilder: FormBuilder
  ) {
    this.currentAngle = 0;
    this.computePointGroup(this.image);
  }
  resetImage() {
    this.currentAngle = 0;
    this.reflectionMatrix = [
      [1, 0],
      [0, 1],
    ];
    this.stringMatrix = '';
    this.flipped = false;
  }

  computePointGroup(image: SymmetricImage) {
    this.image = image;
    this.resetImage();
    this.firstTransformation = false;
    this.rotations = [];
    this.reflections = [];
    if (this.image.n != 0) {
      for (let i = 1; i < this.image.n; i++) {
        this.rotations.push((360 / this.image.n) * i);
      }
      if (this.image.reflection) {
        this.reflections = this.rotations.map(
          (rotation) => rotation + (this.image.firstReflectionAngle || 0)
        );
        this.reflections.push(
          (360 / this.image.n) * this.image.n +
            (this.image.firstReflectionAngle || 0)
        );
        this.pointGroupName = 'D';
      } else {
        this.pointGroupName = 'C';
      }
    } else {
    }
  }

  rotateImage(a: number) {
    this.firstTransformation = true;
    this.transformation = 'rotation';
    this.angle = a % 360;
    if (this.flipped) {
      this.currentAngle = this.currentAngle = this.currentAngle - a;
    } else {
      this.currentAngle = this.currentAngle + a;
    }
    this.makeStringMatrix();
  }

  reflectImage(a: number) {
    this.firstTransformation = true;
    this.transformation = 'reflection';
    this.angle = a % 360;
    this.flipped = !this.flipped;
    const radians = a * (Math.PI / 180);
    const matrix = [
      [Math.cos(-radians), Math.sin(-radians)],
      [Math.sin(-radians), -Math.cos(-radians)],
    ];
    this.reflectionMatrix = this.matricesService.multiplyMatrices(
      this.reflectionMatrix,
      matrix
    );
    this.makeStringMatrix();
  }

  makeStringMatrix() {
    this.stringMatrix = `matrix(${this.reflectionMatrix[0][0]}, ${
      this.reflectionMatrix[0][1]
    }, ${this.reflectionMatrix[1][0]}, ${
      this.reflectionMatrix[1][1]
    }, 0, 0) rotate(${-this.currentAngle}deg)`;
  }

  formGroup = this.formBuilder.group({
    transformation: new FormControl<string>('rotation', [Validators.required]),
    angle: new FormControl<number>(0, [
      Validators.required,
    ]),
  });

  transformCircle() {
    this.firstTransformation = true;
    let formValues = this.formGroup.value;
    this.angle = (formValues.angle || 0) % 360;
    this.transformation = formValues.transformation || 'rotation';
    if (formValues.transformation == 'rotation') {
      this.rotateImage(formValues.angle || 0);
    } else {
      this.reflectImage(formValues.angle || 0);
    }
  }

  onChange() {
    let formValues = this.formGroup.value;
    this.angle = (formValues.angle || 0) % 360;
    this.transformation = formValues.transformation || 'identity';
  }

  identityT(){
    this.transformation = 'identity'
    this.firstTransformation = true;
  }
}
