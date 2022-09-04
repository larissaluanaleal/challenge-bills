import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatTableModule
  ],
  exports: [
    MatToolbarModule,
    MatTableModule
  ],
  declarations: []
})
export class MaterialModule { }
