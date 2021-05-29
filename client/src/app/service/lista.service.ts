import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ListaService {
  base = environment.base;
  constructor(private httpClient: HttpClient) {}
  addEstudiante(form) {
    return this.httpClient.post(`${this.base}addestudiante`, form);
  }
  getEstudiante(id: any) {
    return this.httpClient.get(`${this.base}alumno/${id}`);
  }
  addLista(form){
    return this.httpClient.post(`${this.base}addlista`,form);
  }
}
