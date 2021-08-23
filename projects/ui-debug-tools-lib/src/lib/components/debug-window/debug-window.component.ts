import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import * as DebugEvents from '../../debug-events';
import { DebugWindow } from '../debug-host/debug-host.component';
@Component({
  selector: 'udt-debug-window',
  templateUrl: './debug-window.component.html',
  styleUrls: ['./debug-window.component.css']
})
export class DebugWindowComponent {
  @Input()
  set debugWindow(debugWindow: DebugWindow) {
    this.id = debugWindow.id;
    this.data$ = DebugEvents.observe(this.id);
    this.window = debugWindow;
  }

  @Output() onSelect = new EventEmitter<boolean>();

  id?: string;
  data$?: Observable<any>;
  window?: DebugWindow;
}