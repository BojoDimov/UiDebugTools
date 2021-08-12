# UiDebugTools

This project is used to build and debug ui-debug-tools-lib

## Setup
```shell
yarn install
```
## Demo app

```shell
yarn start
```

## Library
To build the library use

```shell
ng build ui-debug-tools-lib --prod
```

To import the library, in your project root:
```shell
yarn add <path-to-repo-root>/dist/ui-debug-tools-lib
```

Then in `app.module.ts`:
```javascript
import { UiDebugToolsLibModule } from 'ui-debug-tools-lib';

@NgModule({
  import: [
    UiDebugToolsLibModule
  ]
})
```

In `app.component.html`:
```html
<bd-udt-debug-host></bd-udt-debug-host>
```

Usage:
```javascript
constructor{
  debugEventService: DebugEventsService
} {
  setInterval(() => {
    let options = this.service.model;
    debugEventService.emit('Debug Window Title', options);
  }, 1000);
}
```
