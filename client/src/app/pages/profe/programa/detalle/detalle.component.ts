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

  getDetailsProgam(id: any) {
    this.profesorSvc.detailsProgramaById(id).subscribe((res) => {
      this.programas = res;
    });
  }
  getPrograma(id: any) {
    this.profesorSvc.programaById(id).subscribe((res) => {
      this.dataprograma = res;
      console.log(this.dataprograma);
    });
  }
}
