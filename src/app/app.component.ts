import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  activeFloor = 1;

  onClickFloorBtn(i: number) {
    this.activeFloor = i;
  }
}
