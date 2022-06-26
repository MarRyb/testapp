import { Component, OnInit } from '@angular/core';
import { IDynamicTableData } from 'src/app/shared/dynamic-table/dynamic-table.interface';

@Component({
  selector: 'app-page-home',
  templateUrl: './page-home.component.html',
  styleUrls: ['./page-home.component.scss']
})
export class PageHomeComponent implements OnInit {

  public data: IDynamicTableData = [];

  constructor() { }

  ngOnInit(): void {
  }

  onDataChangedHandler(data: any): void {
    console.warn('data: ', data)
  }
}
