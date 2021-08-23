import { Component, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import * as DebugEvents from '../../debug-events';

import { filter, takeUntil } from 'rxjs/operators';

export class DebugWindow {
  id: string;
  open: boolean;

  rect: {
    x: number;
    y: number;
    width: number;
    height: number;
  }

  private readonly DEFAULT_WIDTH = 2 * 647.2135955;
  private readonly DEFAULT_HEIGHT = 2 * 400;

  constructor(id: string) {
    this.id = id;
    this.open = true;

    const windowBoundingRect = document.body.getBoundingClientRect();

    // Window is at least quadruple as small as the whole viewport
    let width = Math.min(windowBoundingRect.width, this.DEFAULT_WIDTH) / 2;
    let height = Math.min(windowBoundingRect.height, this.DEFAULT_HEIGHT) / 2;

    this.rect = {
      x: windowBoundingRect.x + windowBoundingRect.width / 2 - width / 2,
      y: windowBoundingRect.y + windowBoundingRect.height / 2 - height / 2,
      width: width,
      height: height
    }
  }
}

@Component({
  selector: 'udt-debug-host',
  templateUrl: './debug-host.component.html',
  styleUrls: ['./debug-host.component.css']
})
export class DebugHostComponent implements OnDestroy {
  debugWindows: DebugWindow[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  collapsed = false;
  showBanner = true;

  constructor() {
    DebugEvents.observe()
      .pipe(
        takeUntil(this.destroy$),
        filter((event: DebugEvents.DebugEvent) => !this.debugWindows.some(window => window.id === event.channelId))
      ).subscribe(event => {
        this.debugWindows.push(new DebugWindow(event.channelId));
      });
  }

  setOnTop(index: number) {
    let window = this.debugWindows[index];
    this.debugWindows.splice(index, 1);
    this.debugWindows.push(window);
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}