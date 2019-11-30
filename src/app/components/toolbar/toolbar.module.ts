import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';

@NgModule({
  entryComponents: [ToolbarComponent],
  declarations: [ToolbarComponent],
  exports: [ToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class ToolbarModule { }
