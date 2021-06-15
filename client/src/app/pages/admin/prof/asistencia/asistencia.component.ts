import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ListaService } from 'src/app/service/lista.service';
import { ProgramaService } from 'src/app/service/programa.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.component.html',
  styleUrls: ['./asistencia.component.scss'],
})
export class AsistenciaComponent implements OnInit {
  estudiantes: any;
  id:any;
  constructor(private listaSvc: ListaService,
    private programaSvc: ProgramaService,
    private route: ActivatedRoute,) {
      this.id=this.route.snapshot.params.id;
    }

  ngOnInit(): void {
    this.lista(this.id);
  }
  lista(id: any) {
    this.programaSvc.asistencia(id).subscribe((res) => {
      this.estudiantes = res;
      console.log(id)
    });
  }
}
