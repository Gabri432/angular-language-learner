import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.scss']
})
export class PopupComponent {
  @Input() score = 0;

  @Output() retry: EventEmitter<string> = new EventEmitter<string>();

  onButtonRetryClicked(buttonType: string): void {
    this.retry.emit(buttonType);
  }
}
