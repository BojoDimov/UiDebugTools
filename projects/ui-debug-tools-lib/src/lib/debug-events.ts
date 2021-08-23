import { Observable, ReplaySubject } from 'rxjs';
import { filter } from 'rxjs/operators';

export interface DebugEvent {
  channelId: string;
  data: any;
}

const events$ = new ReplaySubject<DebugEvent>();

export function notify(channelId: string, data: any) {
  events$.next({
    channelId,
    data
  });
}

export function observe(channelId?: string): Observable<DebugEvent> {
  if (!channelId) {
    return events$.asObservable();
  } else {
    return events$.pipe(
      filter((event: DebugEvent) => event.channelId === channelId)
    );
  }
}

export function dispose() {
  events$.complete();
}