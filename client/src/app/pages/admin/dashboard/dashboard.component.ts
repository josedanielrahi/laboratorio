import { UsuarioService } from './../../../service/usuario.service';
import { ProfesorService } from './../../../service/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  edificiosData: any;
  labsData: any;
  laboratorios='';
  constructor(private usuarioSvc: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.edificios();
  }

  edificios() {
    this.usuarioSvc.edificios().subscribe((res) => {
      this.edificiosData = res;
    });
  }
  labs(id: any) {
    this.usuarioSvc.labsId(id).subscribe((res) => {
      this.labsData = res;
    });
  
    for (const item of this.labsData) {
      this.laboratorios+=`<strong>${item.nombre}</strong><br>`;
    }

    Swal.fire({
      title: 'Laboratorios en el edificio',
      icon: 'info',
      html:this.laboratorios,
    });
    this.laboratorios='';
    this.labsData=null;
    
  }
}
