import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProgramaService {
  base = environment.base;
  
  constructor(private http : HttpClient) { }

  public labs (){
    return this.http.get(`${this.base}lab`);
  }
  public semestre (){
    return this.http.get(`${this.base}semestre`);
  }
  public ciclo (){
    return this.http.get(`${this.base}ciclo`);
  }
  public turno (){
    return this.http.get(`${this.base}turno`);
  }
  public addProgram (form){
    return this.http.post(`${this.base}addprograma`,form);
  }
  public addDetalle (form){
    return this.http.post(`${this.base}addprogramadetalle`,form);
  }
}
