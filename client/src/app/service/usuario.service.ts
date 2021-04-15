import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  base = environment.base;
  constructor(private httpClient: HttpClient) {}

  insertUsr(form) {
    return this.httpClient.post(`${this.base}addusr`, form);
  }
  getUsr() {
    return this.httpClient.get(`${this.base}usuarios`);
  }
  getUsrRol() {
    return this.httpClient.get(`${this.base}usrrol`);
  }
  cantidad() {
    return this.httpClient.get(`${this.base}countusr`);
  }
  cantidadadm() {
    return this.httpClient.get(`${this.base}countadm`);
  }
  cantidadprof() {
    return this.httpClient.get(`${this.base}countprof`);
  }
  deleteusr(id){
    return this.httpClient.put(`${this.base}deleteusr/${id}`,null)
  }
  validate(usr,psw){
    return this.httpClient.put(`${this.base}validate/${usr}/${psw}`,null);
  }
}
