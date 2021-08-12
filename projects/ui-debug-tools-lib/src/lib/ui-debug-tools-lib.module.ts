import { NgModule } from '@angular/core';
import { DebugWindowComponent } from './components/debug-window/debug-window.component';
import { DebugHostComponent } from './components/debug-host/debug-host.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    DebugWindowComponent,
    DebugHostComponent
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
