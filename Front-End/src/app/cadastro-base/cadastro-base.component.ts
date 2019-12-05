import { Component, OnInit } from '@angular/core';
import { AllCommunityModules } from "@ag-grid-community/all-modules";
import { DataService } from '../data.service';
import { CountryModel } from '../Models/country.model';
import { DepartmentModel } from '../Models/department.model';
import { EmployeeModel } from '../Models/employee.model';
import { LocationModel } from '../Models/location.model';
 
@Component({
  selector: 'app-cadastro-base',
  templateUrl: './cadastro-base.component.html',
  styleUrls: ['./cadastro-base.component.css']
})
export class CadastroBaseComponent implements OnInit {

  /*MODELS*/
  country: CountryModel = new CountryModel();
  department: DepartmentModel = new DepartmentModel();
  employee: EmployeeModel = new EmployeeModel();
  location: LocationModel = new LocationModel();
  /*GET*/
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
  CadastrarCountry(){
    console.log(this.country);
    this.dataService.postCountries(this.country).subscribe(country=>{
      this.country = new CountryModel();
      this.PreencherConteudo();
    },err=>{
      console.log('Erro ao Cadastrar Country, verificar console',err)
    })
  }
  CadastrarDepartment(){
    console.log(this.department);
  }
  CadastrarEmployee(){
    console.log(this.employee);
  }
  CadastrarLocation(){
    console.log(this.location);
  }


  columnFunc = [
    {headerName: 'EMPLOYEE_ID', field: 'employee_id', sortable: true, filter:true},
    {headerName: 'FIRST_NAME', field: 'first_name', sortable: true, filter:true},
    {headerName: 'LAST_NAME', field: 'last_name', sortable: true, filter:true},
    {headerName: 'EMAIL', field: 'email', sortable: true, filter:true},
    {headerName: 'PHONE_NUMBER', field: 'phone_number', sortable: true, filter:true},
    {headerName: 'HIRE_DATE', field: 'hire_date', sortable: true, filter:true},
    {headerName: 'JOB_ID', field: 'job_id', sortable: true, filter:true},
    {headerName: 'SALARY', field: 'salary', sortable: true, filter:true},
    {headerName: 'COMMISSION_PCT', field: 'commission_pct', sortable: true, filter:true},
    {headerName: 'MANAGER_ID', field: 'manager_id', sortable: true, filter:true},
    {headerName: 'DEPARTMENT_ID', field: 'department_id', sortable: true, filter:true}
];
columnDepart = [
  {headerName: 'DEPARTMENT_ID', field: 'department_id', sortable: true, filter:true},
  {headerName: 'DEPARTMENT_NAME', field: 'department_name', sortable: true, filter:true},
  {headerName: 'MANAGER_ID', field: 'manager_id', sortable: true, filter:true},
  {headerName: 'LOCATION_ID', field: 'location_id', sortable: true, filter:true}
];
columnEnd = [
  {headerName: 'LOCATION_ID', field: 'location_id', sortable: true, filter:true},
  {headerName: 'STREET_ADDRESS', field: 'street_address', sortable: true, filter:true},
  {headerName: 'POSTAL_CODE', field: 'postal_code', sortable: true, filter:true},
  {headerName: 'CITY', field: 'city', sortable: true, filter:true},
  {headerName: 'STATE_PROVINCE', field: 'state_province', sortable: true, filter:true},
  {headerName: 'COUNTRY_ID', field: 'country_id', sortable: true, filter:true}
];
columnPaises = [
  {headerName: 'COUNTRY_ID', field: 'country_id', sortable: true, filter:true},
  {headerName: 'COUNTRY_NAME', field: 'country_name', sortable: true, filter:true},
  {headerName: 'REGION_ID', field: 'region_id', sortable: true, filter:true}
];
columnTodos = [
  {headerName: 'NOME', field: 'NOME', sortable: true, filter:true},
  {headerName: 'DEPARTAMENTO', field: 'DEPARTAMENTO', sortable: true, filter:true},
  {headerName: 'CIDADE', field: 'CIDADE', sortable: true, filter:true},
  {headerName: 'PAÍS', field: 'PAIS', sortable: true, filter:true}
];

modules = AllCommunityModules;

}
