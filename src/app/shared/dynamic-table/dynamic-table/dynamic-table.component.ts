import { Component, Input, OnInit } from '@angular/core';
import { IDynamicTableData } from 'src/app/shared/dynamic-table/dynamic-table.interface';

@Component({
  selector: 'app-dynamic-table',
  templateUrl: './dynamic-table.component.html',
  styleUrls: ['./dynamic-table.component.scss']
})
export class DynamicTableComponent implements OnInit {
  @Input() data!: IDynamicTableData;

  constructor() { }

  ngOnInit(): void {
  }

}
