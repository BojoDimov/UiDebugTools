import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'udt-debug-window',
  templateUrl: './debug-window.component.html',
  styleUrls: ['./debug-window.component.css']
})
export class DebugWindowComponent {
  @Input() title: string = '';
  @Input() data: any = undefined;

  @Output() onClose = new EventEmitter<boolean>();
  @Output() onSelect = new EventEmitter<boolean>();

  top = 200;
  left = 200;

  private isDragging = false;
  private previousPosition?: MouseEvent;

  close() {
    this.onClose.emit(true);
  }
}