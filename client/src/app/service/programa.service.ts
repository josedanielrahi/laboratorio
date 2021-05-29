import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProgramaService {
  base = environment.base;

  constructor(private http: HttpClient) {}

  public labs() {
    return this.http.get(`${this.base}lab`);
  }
  public semestre() {
    return this.http.get(`${this.base}semestre`);
  }
  public ciclo() {
    return this.http.get(`${this.base}ciclo`);
  }
  public turno() {
    return this.http.get(`${this.base}turno`);
  }
  public addProgram(form) {
    return this.http.post(`${this.base}addprograma`, form);
  }
  public addDetalle(form) {
    return this.http.post(`${this.base}addprogramadetalle`, form);
  }
  public last(id: any) {
    return this.http.get(`${this.base}lastInsertUsr/${id}`);
  }
  public progeama(id: any) {
    return this.http.get(`${this.base}progrmaByIdValue/${id}`);
  }
  public updatePrograma(form,id:any){
    return this.http.put(`${this.base}updateprograma/${id}`,form);
  }
  public getDetailsById(id:any){
    return this.http.get(`${this.base}detailsById/${id}`)
  }
  public updateDetails(form,id:any){
    return this.http.put(`${this.base}updatedetails/${id}`,form);
  }
  public asistencia(id:any){
    return this.http.get(`${this.base}lista/${id}`);
  }
}
