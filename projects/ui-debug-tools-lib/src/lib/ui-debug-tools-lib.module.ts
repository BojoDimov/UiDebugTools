import { NgModule } from '@angular/core';
import { DebugWindowComponent } from './components/debug-window/debug-window.component';
import { DebugHostComponent } from './components/debug-host/debug-host.component';
import { CommonModule } from '@angular/common';
import { FloatingWindowDirective } from './components/floating-window.directive';

@NgModule({
  declarations: [
    DebugWindowComponent,
    DebugHostComponent,
    FloatingWindowDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DebugWindowComponent,
    DebugHostComponent
  ]
})
export class UiDebugToolsLibModule { }
