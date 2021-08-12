import { Component } from '@angular/core';
import { DebugEventsService } from '../../projects/ui-debug-tools-lib/src/public-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ui-debug-tools';

  constructor(
    private debugEvents: DebugEventsService
  ) {
    let foxCount = 1;
    setInterval(() => {
      debugEvents.emit('foxes-channel-1', `fox-${foxCount}`);
      foxCount++;
    }, 1000);

    let dogCount = 1;
    setInterval(() => {
      debugEvents.emit('dogs-channel-1', `dog-${foxCount}`);
      dogCount++;
    }, 1000);
  }
}
