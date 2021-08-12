import { Component, OnDestroy } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';
import { DebugEventsService } from '../../services/debug-events.service';

import { takeUntil } from 'rxjs/operators';

interface DebugWindow {
  id: string;
  title: string;
  data$: Subject<any>;
  open: boolean
}

@Component({
  selector: 'bd-udt-debug-host',
  templateUrl: './debug-host.component.html',
  styleUrls: ['./debug-host.component.css']
})
export class DebugHostComponent implements OnDestroy {
  debugWindows: DebugWindow[] = [];
  destroy$: Subject<boolean> = new Subject<boolean>();
  collapsed = false;

  constructor(
    debugEvents: DebugEventsService
  ) {
    debugEvents.data$.pipe(takeUntil(this.destroy$)).subscribe(event => {
      let window = this.debugWindows.find(window => window.id === event.channelId);

      if (!window) {
        window = {
          id: event.channelId,
          title: event.channelId,
          data$: new ReplaySubject<any>(1),
          open: true
        };
        this.debugWindows.push(window);
      }

      window.data$.next(event.data);
    });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.debugWindows.forEach(window => window.data$.complete())
  }
}
