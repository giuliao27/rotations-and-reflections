import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SymmetricImage } from '../../models/symmetric-image.model';

@Component({
  selector: 'app-symmetric-images',
  templateUrl: './symmetric-images.component.html',
  styleUrl: './symmetric-images.component.scss',
})
export class SymmetricImagesComponent implements OnInit {
  @Output() imageChange = new EventEmitter<SymmetricImage>();
  @Input() group?: string;
  show?: SymmetricImage[];

  ngOnInit(): void {
    this.show = this.images.filter((image) => image.group == this.group);
  }

  images: SymmetricImage[] = [
    {
      group: 'Polygons',
      name: 'Triangle',
      src: '../../../assets/images/triangle.svg',
      n: 3,
      reflection: true,
      firstReflectionAngle: -60,
    },
    {
      group: 'Polygons',
      name: 'Square',
      src: '../../../assets/images/square.svg',
      n: 4,
      reflection: true,
      firstReflectionAngle: -90,
    },
    {
      group: 'Polygons',
      name: 'Pentagon',
      src: '../../../assets/images/pentagon.svg',
      n: 5,
      reflection: true,
      firstReflectionAngle: -36,
    },
    {
      group: 'Polygons',
      name: 'Hexagon',
      src: '../../../assets/images/hexagon.svg',
      n: 6,
      reflection: true,
      firstReflectionAngle: -60,
    },
    {
      group: 'Polygons',
      name: 'Heptagon',
      src: '../../../assets/images/heptagon.svg',
      n: 7,
      reflection: true,
      firstReflectionAngle: -25.7,
    },
    {
      group: 'Polygons',
      name: 'Octagon',
      src: '../../../assets/images/octagon.svg',
      n: 8,
      reflection: true,
    },
    {
      group: 'Polygons',
      name: 'Nonagon',
      src: '../../../assets/images/ennagon.svg',
      n: 9,
      reflection: true,
      firstReflectionAngle: -20,
    },
    {
      group: 'Polygons',
      name: 'Decagon',
      src: '../../../assets/images/decagon.svg',
      n: 10,
      reflection: true,
      firstReflectionAngle: -36,
    },
    {
      group: 'Polygons',
      name: 'Dodecagon',
      src: '../../../assets/images/dodecagon.svg',
      n: 12,
      reflection: true,
      firstReflectionAngle: -60,
    },
    {
      group: 'Polygons',
      name: 'Circle',
      src: '../../../assets/images/circlewithpoint.svg',
      n: 0,
      reflection: true,
    },
    {
      group: 'Flowers',
      name: 'Flower',
      src: '../../../assets/images/flowerc3.svg',
      n: 3,
      reflection: false,
    },
    {
      group: 'Flowers',
      name: 'Flower',
      src: '../../../assets/images/flowerc4.svg',
      n: 4,
      reflection: false,
    },
    {
      group: 'Flowers',
      name: 'Flower',
      src: '../../../assets/images/flowerd36.svg',
      n: 36,
      reflection: true,
      firstReflectionAngle: -10,
    },
    {
      group: 'Flowers',
      name: 'Flower',
      src: '../../../assets/images/flowerd6.svg',
      n: 6,
      reflection: true,
      firstReflectionAngle: -60,
    },
    {
      group: 'Flowers',
      name: 'Flower',
      src: '../../../assets/images/flowerc12.svg',
      n: 12,
      reflection: false,
    },
  ];

  chooseImage(image: SymmetricImage) {
    this.imageChange.emit(image);
  }
}
