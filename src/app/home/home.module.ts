import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { PageHomeComponent } from './page-home/page-home.component';
import { DynamicTableModule } from '../shared/dynamic-table/dynamic-table.module';
import { DataLoaderFormComponent } from './data-loader-form/data-loader-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    PageHomeComponent,
    DataLoaderFormComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    DynamicTableModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
