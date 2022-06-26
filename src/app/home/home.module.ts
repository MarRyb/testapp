import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { DynamicTableModule } from '../shared/dynamic-table/dynamic-table.module';


@NgModule({
  declarations: [
    PageHomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DynamicTableModule
  ]
})
export class HomeModule { }
