import { Component, ViewChild } from '@angular/core';

import { Table } from 'primeng/table';

import data from '../assets/json/veils.json';

import { Veil } from './interface/veil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild('dt') table!: Table;

  public veils: Veil[];

  public headers: string[];

  constructor() {
    console.log(data);
    this.veils = data;
    this.headers = Object.keys(this.veils[1]);
  }

  public clear(table: Table) {
    table.clear();
  }

  public applyFilterGlobal($event: any, stringVal: string) {
    this.table.filterGlobal(
      ($event.target as HTMLInputElement).value,
      stringVal
    );
  }
}
