import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.scss'],
})
export class CommonComponent implements OnDestroy {

  observableList: Subscription[] = [];
  setTimeouts: ReturnType<typeof setTimeout>[] = [];



  ngOnDestroy() {
    this.observableList.forEach((element) => {
      element.unsubscribe();
    });

    this.setTimeouts.forEach((element) => {
      clearTimeout(element);
    });
  }

}
