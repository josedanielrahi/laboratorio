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
  exist(id: any) {
    return this.httpClient.get(`${this.base}profesorByIdUsr/${id}`);
  }
  programaByIdProf(id: any) {
    return this.httpClient.get(`${this.base}programaByIdProf/${id}`);
  }
  addprofesor(form) {
    return this.httpClient.post(`${this.base}addprofesor`, form);
  }
  profesorByIdUsr(id: any) {
    return this.httpClient.get(`${this.base}profesorByIdUsr/${id}`);
  }
  programaByIdUsr(id: any) {
    return this.httpClient.get(`${this.base}programaByIdUsr/${id}`);
  }
  programaById(id: any) {
    return this.httpClient.get(`${this.base}progrmaById/${id}`);
  }
  detailsProgramaById(id: any){
    return this.httpClient.get(`${this.base}progrmadetaislbyid/${id}`);
  }
  deleteDetails(id: any) {
    return this.httpClient.delete(`${this.base}deletedetailsprogram/${id}`);
  }
  deletePrograma(id: any){
    return this.httpClient.delete(`${this.base}deleteprograma/${id}`);
  }


}
