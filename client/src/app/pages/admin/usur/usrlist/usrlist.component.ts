import { UsuarioService } from '../../../../service/usuario.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usrlist',
  templateUrl: './usrlist.component.html',
  styleUrls: ['./usrlist.component.scss'],
})
export class UsrlistComponent implements OnInit {
  usuarios: any;

  constructor(private usuarioSvc: UsuarioService) {}

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
    this.usuarioSvc.deleteusr(id).subscribe(res =>{
      this.getUsr();
    });
  }
  goToEdit(id : any ): void{
    console.log('editar elemento: ', id)
  }
}
