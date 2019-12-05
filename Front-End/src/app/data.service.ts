import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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
      return this._http.get<any[]>(`${this.apiUrlC}`);
    }
    getDepartments(){
      return this._http.get<any[]>(`${this.apiUrlD}`);
    }

    getEmployees(){
      return this._http.get<any[]>(`${this.apiUrlE}`);
    }

    getLocations(){
      return this._http.get<any[]>(`${this.apiUrlL}`);
    }
    getTodos(){
      return this._http.get<any[]>(`${this.apiUrlT}`);
    }


}
