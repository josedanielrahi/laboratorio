import { UsuarioService } from './../../../service/usuario.service';
import { ProfesorService } from './../../../service/profesor.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  profesores : any;
  usuarios : any;
  administradores : any;
  constructor(
    private usuarioSvc : UsuarioService,
  ) { }

  ngOnInit(): void {
    this.status();
  }

  status(){
    this.usuarioSvc.cantidadadm().subscribe(res=>{
      this.administradores=res;
    });
    this.usuarioSvc.cantidadprof().subscribe(res =>{
      this.profesores=res;
    });
    this.usuarioSvc.cantidad().subscribe(res => {
      this.usuarios=res;
    })
  }

}
