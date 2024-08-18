import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinisteringToTheLordRoutingModule } from './ministering-to-the-lord-routing.module';
import { For2022Component } from './for-2022/for-2022.component';
import { For2023Component } from './for-2023/for-2023.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MinisteringToTheLordRoutingModule,
    For2022Component,
    For2023Component
  ]
})
export class MinisteringToTheLordModule { }
