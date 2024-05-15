import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-mat-button-custom',
  templateUrl: './mat-button-custom.component.html',
  styleUrls: ['./mat-button-custom.component.scss']
})
export class MatButtonCustomComponent {

  @Input() text: string = '';
  @Input() icon: string | undefined = undefined;
  @Input() disabled: boolean = false;
  @Input() color: string = 'primary';
  @Input() backGroundColor: string = 'primary';
  @Output() emitClick = new EventEmitter();

}
