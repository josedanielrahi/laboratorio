import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ProfesorService {
  base = environment.base;
  constructor(private httpClient: HttpClient) {}

  cantidad() {
    return this.httpClient.get(`${this.base}countprof`);
  }
  getProf() {
    return this.httpClient.get(`${this.base}profesores`);
  }
  deleteProf(id: any) {
    return this.httpClient.put(`${this.base}deleteprof/${id}`, null);
  }
  exist(id: any){
    return this.httpClient.get(`${this.base}profesorByIdUsr/${id}`);
  }
  programaByIdProf(id : any){
    return this.httpClient.get(`${this.base}programaByIdProf/${id}`);
  }
  addprofesor(form){
    return this.httpClient.post(`${this.base}addprofesor`,form);
  }
}
