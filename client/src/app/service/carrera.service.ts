import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CarreraService {
  //llamada a la api route
  base = environment.base;
  constructor(private httpClient: HttpClient) {}

  getCarreras() {
    return this.httpClient.get(`${this.base}carreras`);
  }
  getCarreraById(id : any){
    return this.httpClient.get(`${this.base}carreras/${id}`);
  }
}
