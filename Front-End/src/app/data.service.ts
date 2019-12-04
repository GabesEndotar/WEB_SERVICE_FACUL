import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Countries } from './countries.model';
import { Departments } from './departments.model';
import { Employees } from './employees.model';
import { Locations } from './locations.model';
import { Todos } from './todos.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {
apiUrlC='http://localhost:3000/api/countries';
apiUrlD='http://localhost:3000/api/departments';
apiUrlE='http://localhost:3000/api/employees';
apiUrlL='http://localhost:3000/api/locations';
apiUrlT='http://localhost:3000/api/todos';

  constructor(private _http: HttpClient) {}

    getCountries(){
      return this._http.get<Countries[]>(this.apiUrlC);
    }
    getDepartments(){
      return this._http.get<Departments[]>(this.apiUrlD);
    }

    getEmployees(){
      return this._http.get<Employees[]>(this.apiUrlE);
    }

    getLocations(){
      return this._http.get<Locations[]>(this.apiUrlL);
    }
    getTodos(){
      return this._http.get<Todos[]>(this.apiUrlT);
    }


}
