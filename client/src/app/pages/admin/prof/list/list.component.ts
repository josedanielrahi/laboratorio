import  Swal  from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProfesorService } from 'src/app/service/profesor.service';
import {NgxPaginationModule} from 'ngx-pagination';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  prodData: any;
  id: any;
  collection: any[] ;

  constructor(private profesoresSvc: ProfesorService, private router: Router) {}
  p : number = 1;
  ngOnInit(): void {
    this.getProf();
  }

  getProf() {
    this.profesoresSvc.getProf().subscribe((res) => {
      this.prodData = res;
    });
  }
  goToDetails(idusr: any): void {
    console.log(idusr);
    this.router.navigate(['/detailsprof', idusr]);
  }
  goToEdit(id: any): void {
    console.log('Edit');
  }
  goToDelete(id: any) {
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
        this.profesoresSvc.deleteProf(id).subscribe((res) => {
         this.ngOnInit();
        });
        Swal.fire('Eliminado!', 'Operacion realizada con exito.', 'success');
      }
    });
  }

}
