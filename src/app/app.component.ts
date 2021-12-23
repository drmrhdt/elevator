import { Component } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  floors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  activeFloor = 1;
  selectedFloors = new BehaviorSubject<number[]>([]);

  onClickFloorBtn(floor: number) {
    this.activeFloor = floor;
    const floors = this.selectedFloors.value;
    floors.push(floor);
    this.selectedFloors.next(floors);
  }
}
