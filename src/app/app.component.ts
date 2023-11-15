import { Component } from '@angular/core';

import { Table } from 'primeng/table';

import data from '../assets/json/velos.json';

import { Velo } from './interface/velo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tabla-velos';

  public velos: Velo[];

  public headers: string[];

  constructor() {
    console.log(data);
    this.velos = data;
    this.headers = Object.keys(this.velos[1]);
  }

  public clear(table: Table) {
    table.clear();
  }
}
