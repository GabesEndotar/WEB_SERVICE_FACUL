import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { DataService } from '../data.service';

@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.css']
})
export class CadastroBaseComponent implements OnInit {

  countries:Array<any>;
  departments:Array<any>;
  employees:Array<any>;
  locations:Array<any>;
  todos:Array<any>;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.PreencherConteudo();
  }
  PreencherConteudo(){
    this.dataService.getCountries().subscribe(date => this.countries = date);
    this.dataService.getDepartments().subscribe(date => this.departments = date);
    this.dataService.getEmployees().subscribe(date => this.employees = date);
    this.dataService.getLocations().subscribe(date => this.locations = date);
    this.dataService.getTodos().subscribe(date => this.todos = date);
  }
  columnFunc = [
    {headerName: 'EMPLOYEE_ID', field: 'EMPLOYEE_ID', sortable: true, filter:true},
    {headerName: 'FIRST_NAME', field: 'FIRST_NAME', sortable: true, filter:true},
    {headerName: 'LAST_NAME', field: 'LAST_NAME', sortable: true, filter:true},
    {headerName: 'EMAIL', field: 'EMAIL', sortable: true, filter:true},
    {headerName: 'PHONE_NUMBER', field: 'PHONE_NUMBER', sortable: true, filter:true},
    {headerName: 'HIRE_DATE', field: 'HIRE_DATE', sortable: true, filter:true},
    {headerName: 'JOB_ID', field: 'JOB_ID', sortable: true, filter:true},
    {headerName: 'SALARY', field: 'SALARY', sortable: true, filter:true},
    {headerName: 'COMMISSION_PCT', field: 'COMMISSION_PCT', sortable: true, filter:true},
    {headerName: 'MANAGER_ID', field: 'MANAGER_ID', sortable: true, filter:true},
    {headerName: 'DEPARTMENT_ID', field: 'DEPARTMENT_ID', sortable: true, filter:true}
];
columnDepart = [
  {headerName: 'DEPARTMENT_ID', field: 'DEPARTMENT_ID', sortable: true, filter:true},
  {headerName: 'DEPARTMENT_NAME', field: 'DEPARTMENT_NAME', sortable: true, filter:true},
  {headerName: 'MANAGER_ID', field: 'MANAGER_ID', sortable: true, filter:true},
  {headerName: 'LOCATION_ID', field: 'LOCATION_ID', sortable: true, filter:true}
];
columnEnd = [
  {headerName: 'LOCATION_ID', field: 'LOCATION_ID', sortable: true, filter:true},
  {headerName: 'STREET_ADDRESS', field: 'STREET_ADDRESS', sortable: true, filter:true},
  {headerName: 'POSTAL_CODE', field: 'POSTAL_CODE', sortable: true, filter:true},
  {headerName: 'CITY', field: 'CITY', sortable: true, filter:true},
  {headerName: 'STATE_PROVINCE', field: 'STATE_PROVINCE', sortable: true, filter:true},
  {headerName: 'COUNTRY_ID', field: 'COUNTRY_ID', sortable: true, filter:true}
];
columnPaises = [
  {headerName: 'COUNTRY_ID', field: 'COUNTRY_ID', sortable: true, filter:true},
  {headerName: 'COUNTRY_NAME', field: 'COUNTRY_NAME', sortable: true, filter:true},
  {headerName: 'REGION_ID', field: 'REGION_ID', sortable: true, filter:true}
];

rowDataF : any;
rowDataD : any;
rowDataE : any;
rowDataP : any;

modules = AllCommunityModules;

} 
