import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-not-found-page',
  templateUrl: './not-found-page.component.html',
  styleUrls: ['./not-found-page.component.scss']
})
export class NotFoundPageComponent {

  @Output() emitGoBack = new EventEmitter();
  @Input() goBackAutomatically: boolean = true;
  @Input() buttontext: string = "go back";

  goBack() {
    this.emitGoBack.emit();
    if (this.goBackAutomatically) window.history.back();
  }

}
