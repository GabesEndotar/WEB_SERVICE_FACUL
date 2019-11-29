import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from "@ag-grid-community/all-modules";

@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.css']
})
export class CadastroBaseComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  columnFunc = [
    {headerName: 'Make', field: 'make', sortable: true, filter:true},
    {headerName: 'Model', field: 'model', sortable: true, filter:true},
    {headerName: 'Price', field: 'price', sortable: true, filter:true}
];
columnDepart = [
  {headerName: 'Make', field: 'make', sortable: true, filter:true},
  {headerName: 'Model', field: 'model', sortable: true, filter:true},
  {headerName: 'Price', field: 'price', sortable: true, filter:true}
];
columnEnd = [
  {headerName: 'Make', field: 'make', sortable: true, filter:true},
  {headerName: 'Model', field: 'model', sortable: true, filter:true},
  {headerName: 'Price', field: 'price', sortable: true, filter:true}
];
columnPaises = [
  {headerName: 'Make', field: 'make', sortable: true, filter:true},
  {headerName: 'Model', field: 'model', sortable: true, filter:true},
  {headerName: 'Price', field: 'price', sortable: true, filter:true}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 },
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

modules = AllCommunityModules;

}
