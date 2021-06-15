import { Router } from '@angular/router';
import { UsuarioService } from '../../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-usrlist',
  templateUrl: './usrlist.component.html',
  styleUrls: ['./usrlist.component.scss'],
})
export class UsrlistComponent implements OnInit {
  usuarios: any;
  actual: number = 1;
  constructor(private usuarioSvc: UsuarioService, private router: Router) {}

  ngOnInit(): void {
    this.getUsr();
  }

  getUsr() {
    return this.usuarioSvc.getUsrRol().subscribe((res) => {
      this.usuarios = res;
    });
  }
  goToDetails(id: any): void {
    console.log('detalles del id: ', id);
  }
  goToDelete(id: any): void {
    Swal.fire({
      title: 'Estas seguro que lo quieres eliminar?',
      text: 'Esta operacion es irrebersible!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar',
    }).then((result) => {
      if (result.isConfirmed) {
        this.usuarioSvc.deleteusr(id).subscribe((res) => {
          this.getUsr();
        });
        Swal.fire('Eliminado!', 'Operacion realizada con exito.', 'success');
      }
    });
  }
  goToEdit(id: any): void {
    this.router.navigate(['usredit',id])
  }
}
