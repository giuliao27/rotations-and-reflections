import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-choose-image',
  templateUrl: './choose-image.component.html',
  styleUrl: './choose-image.component.scss',
})
export class ChooseImageComponent {
  @Output() imageChange = new EventEmitter<any>();

  images = [
    { src: '../../assets/images/mytrianglefirstpage.svg' },
    { src: '../../assets/images/mysquare.svg' },
    { src: '../../assets/images/mycircle.svg' },
  ];

  chooseImage(image: any) {
    this.imageChange.emit(image);
  }
}
