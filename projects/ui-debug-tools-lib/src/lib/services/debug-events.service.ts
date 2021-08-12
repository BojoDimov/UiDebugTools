import { Injectable } from '@angular/core';
import { BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

export interface DebugEvent {
  channelId: string;
  data: any;
}

@Injectable({
  providedIn: 'root'
})
export class DebugEventsService {
  private _data$: Subject<DebugEvent> = new ReplaySubject<DebugEvent>();

  constructor() { }

  get data$() {
    return this._data$.asObservable();
  }

  emit(channel: string, data: any): void {
    this._data$.next({
      channelId: channel,
      data
    });
  }
}
