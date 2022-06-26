import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DynamicTableComponent } from './dynamic-table/dynamic-table.component';
import { DynamicTableHeaderComponent } from './dynamic-table-header/dynamic-table-header.component';
import { DynamicTableBodyComponent } from './dynamic-table-body/dynamic-table-body.component';
import { DynamicTableCellHeaderComponent } from './cells/dynamic-table-cell-header/dynamic-table-cell-header.component';
import { DynamicTableCellDefaultComponent } from './cells/dynamic-table-cell-default/dynamic-table-cell-default.component';
import { DynamicTableRowsSelectorComponent } from './dynamic-table-rows-selector/dynamic-table-rows-selector.component';

@NgModule({
  declarations: [
    DynamicTableComponent,
    DynamicTableHeaderComponent,
    DynamicTableBodyComponent,
    DynamicTableCellHeaderComponent,
    DynamicTableCellDefaultComponent,
    DynamicTableRowsSelectorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    DynamicTableComponent
  ]
})
export class DynamicTableModule { }
