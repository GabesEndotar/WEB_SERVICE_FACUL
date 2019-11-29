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
  columnDefs = [
    {field: 'make' },
    {field: 'model' },
    {field: 'price'}
];

rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxter', price: 72000 }
];

modules = AllCommunityModules;

}
