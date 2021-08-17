import { Directive, ElementRef, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[udtFloatingWindow]'
})
export class FloatingWindowDirective {

  @Input()
  @HostBinding('style.top')
  top?: string;

  @Input()
  @HostBinding('style.left')
  left?: string;

  @Input()
  @HostBinding('style.bottom')
  bottom?: string;

  @Input()
  @HostBinding('style.right')
  right?: string;

  private isDragging = false;
  private previousPosition?: MouseEvent;

  constructor(private elementRef: ElementRef) { }

  /**
   * If not enough values for effective position are provided, assume that:
   * vertical orientation is based on `top` css style
   * horizontal orientation is based on `left` css style
   */
  ngAfterViewInit() {
    const boundingRect = (<HTMLElement>this.elementRef.nativeElement).getBoundingClientRect();

    if (!this.top && !this.bottom) {
      this.top = boundingRect.y + 'px';
    }

    if (!this.left && !this.right) {
      this.left = boundingRect.x + 'px';
    }
  }

  @Output() onSelect = new EventEmitter<boolean>();

  @HostListener('mousedown', ['$event'])
  startDrag(ev: MouseEvent) {
    ev.stopPropagation();

    this.isDragging = true;
    this.previousPosition = ev;
    this.onSelect.emit(true);

    return false;
  }

  @HostListener('mousemove', ['$event'])
  drag(ev: MouseEvent) {
    ev.stopPropagation();

    if (!this.isDragging) {
      return;
    }

    let deltaX = ev.x - (this.previousPosition?.x ?? 0)
    let deltaY = ev.y - (this.previousPosition?.y ?? 0);

    if (this.top) {
      let topValue = parseInt(this.top.slice(0, -2));
      this.top = topValue + deltaY + 'px';
    }

    if (this.right) {
      let rightValue = parseInt(this.right.slice(0, -2));
      this.right = rightValue - deltaX + 'px';
    }

    if (this.bottom) {
      let bottomValue = parseInt(this.bottom.slice(0, -2));
      this.bottom = bottomValue - deltaY + 'px';
    }

    if (this.left) {
      let leftValue = parseInt(this.left.slice(0, -2));
      this.left = leftValue + deltaX + 'px';
    }

    this.previousPosition = ev;
    return false;
  }

  @HostListener('mouseup', ['$event'])
  endDrag(ev: MouseEvent) {
    ev.stopPropagation();

    this.isDragging = false;
    this.previousPosition = undefined;
    return false;
  }

}