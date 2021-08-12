import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'bd-udt-debug-window',
  templateUrl: './debug-window.component.html',
  styleUrls: ['./debug-window.component.css']
})
export class DebugWindowComponent {
  @Input() title: string = '';
  @Input() data: any = undefined;

  @Output() onClose = new EventEmitter<boolean>();

  top = 200;
  left = 200;

  private isDragging = false;
  private previousPosition?: MouseEvent;

  ngOnInit(): void {
    document.body.addEventListener('mousedown', ev => {
      console.log('Caught mouse down event over document body');
    });
  }

  dragStart(event: MouseEvent) {
    event.stopPropagation();

    this.isDragging = true;
    this.previousPosition = event;
  }

  drag(event: MouseEvent) {
    event.stopPropagation();

    if (!this.isDragging) {
      return;
    }

    this.top += event.y - (this.previousPosition?.y ?? 0);
    this.left += event.x - (this.previousPosition?.x ?? 0);
    this.previousPosition = event;
  }

  dragEnd(event: MouseEvent) {
    event.stopPropagation();

    this.isDragging = false;
    this.previousPosition = undefined;
  }

  close(){
    this.onClose.emit(true);
  }
}
