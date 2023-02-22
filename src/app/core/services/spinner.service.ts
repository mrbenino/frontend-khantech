import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SpinnerService {
  spinnerStatus = new Subject();
  spinCounter = 0;

  constructor() {}

  show() {
    this.spinCounter++;
    this.spinnerStatus.next(true);
  }

  hide() {
    this.spinCounter--;
    if (this.spinCounter <= 0) {
      this.spinnerStatus.next(false);
    }
  }

  hideCompletely() {
    this.spinCounter = 0;
    this.spinnerStatus.next(false);
  }
}
