import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmployeeModel } from './Models/employee.model';
import { LocationModel } from './Models/location.model';
import { DepartmentModel } from './Models/department.model';
import { CountryModel } from './Models/country.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  apiUrlC = 'http://localhost:3000/api/countries';
  apiUrlD = 'http://localhost:3000/api/departments';
  apiUrlE = 'http://localhost:3000/api/employees';
  apiUrlL = 'http://localhost:3000/api/locations';
  apiUrlT = 'http://localhost:3000/api/todos';

  constructor(private _http: HttpClient) { }
  /*----------------------------GET----------------------------------*/
  getCountries() {
    return this._http.get<any[]>(`${this.apiUrlC}`);
  }
  getDepartments() {
    return this._http.get<any[]>(`${this.apiUrlD}`);
  }

  getEmployees() {
    return this._http.get<any[]>(`${this.apiUrlE}`);
  }

  getLocations() {
    return this._http.get<any[]>(`${this.apiUrlL}`);
  }
  getTodos() {
    return this._http.get<any[]>(`${this.apiUrlT}`);
  }
  /*----------------------------POST----------------------------------*/
  postCountries(country: CountryModel) : Observable<any> {
   return this._http.post(`${this.apiUrlC}`, country);
  }
  postDepartments(department: DepartmentModel) : Observable<any> {
   return this._http.post(`${this.apiUrlD}`, department);
  }

  postEmployees(employee: EmployeeModel) : Observable<any> {
  return this._http.post(`${this.apiUrlE}`, employee);
  }

  postLocations(location: LocationModel) : Observable<any> {
  return this._http.post(`${this.apiUrlL}`, location);
  }
  /*----------------------------PUT----------------------------------*/
  putCountry(id:any ,country: CountryModel) : Observable<any> {
    return this._http.put(`${this.apiUrlC}`.concat('/',id), country);
   }
  putDepartments(id:any ,department: DepartmentModel) : Observable<any> {
    return this._http.put(`${this.apiUrlD}`.concat(id), department);
   }
 
  putEmployees(id:any ,employee: EmployeeModel) : Observable<any> {
   return this._http.put(`${this.apiUrlE}`.concat(id), employee);
   }
 
  putLocations(id:any ,location: LocationModel) : Observable<any> {
   return this._http.put(`${this.apiUrlL}`.concat(id), location);
   }
  /*----------------------------DELETE----------------------------------*/
  deleteCountry(id:any) : Observable<any> {
    return this._http.delete(`${this.apiUrlC}`.concat(id));
   }
  deleteDepartments(id:any) : Observable<any> {
    return this._http.delete(`${this.apiUrlD}`.concat(id));
   }
 
  deleteEmployees(id:any) : Observable<any> {
   return this._http.delete(`${this.apiUrlE}`.concat(id));
   }
 
  deleteLocations(id:any) : Observable<any> {
   return this._http.delete(`${this.apiUrlL}`.concat(id));
   }
}
