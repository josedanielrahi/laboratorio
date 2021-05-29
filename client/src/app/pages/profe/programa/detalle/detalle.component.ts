import Swal from 'sweetalert2';
import { ProfesorService } from 'src/app/service/profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss'],
})
export class DetalleComponent implements OnInit {
  programas: any;
  dataprograma: any;
  id: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesorSvc: ProfesorService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.getDetailsProgam(value.get('id'));
        this.getPrograma(value.get('id'));
      } else {
        this.router.navigate(['/profehome']);
      }
    });
  }
  goedit(id:any){
    this.router.navigate(['editdetails/',id]);
  }
  getDetailsProgam(id: any) {
    this.profesorSvc.detailsProgramaById(id).subscribe((res) => {
      this.programas = res;
    });
  }
  getPrograma(id: any) {
    this.profesorSvc.programaById(id).subscribe((res) => {
      this.dataprograma = res;
    });
  }
  goToAddActiviti() {
    this.id = this.route.snapshot.params.id;
    this.router.navigate(['newdetalle/', this.id]);
  }
  delete(id: any) {
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
        this.profesorSvc.deleteDetails(id).subscribe((res) => {
          this.ngOnInit();
        });
        Swal.fire('Eliminado!', 'Operacion realizada con exito.', 'success');
      }
    });
  }
  list(id: any){
    this.router.navigate(['lista',id]);
  }
}