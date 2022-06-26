import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { TDynamicTableHeaders } from './dynamic-table.interface';

@Injectable({
  providedIn: 'root'
})
export class DynamicTableService {
  private headersSubj = new BehaviorSubject<TDynamicTableHeaders>([]);
  public headers$ = this.headersSubj.asObservable();

  constructor() { }
}
