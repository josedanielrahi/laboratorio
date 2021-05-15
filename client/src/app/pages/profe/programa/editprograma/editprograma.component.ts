import Swal from 'sweetalert2';
import { CarreraService } from 'src/app/service/carrera.service';
import { Programa } from 'src/app/models/programa';
import { ProgramaService } from 'src/app/service/programa.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-editprograma',
  templateUrl: './editprograma.component.html',
  styleUrls: ['./editprograma.component.scss'],
})
export class EditprogramaComponent implements OnInit {
  id: any;
  register: any;
  programa = new Programa();
  carreras: any;
  labs: any;
  ciclo: any;
  semestre: any;
  turno: any;
  programForm: FormGroup;
  profId = localStorage.getItem('prof_id');
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private programaSvc: ProgramaService,
    private carreraSvc: CarreraService,
    private router: Router
  ) {
    this.id = this.route.snapshot.params.id;
    this.initForm();
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getData();
    this.getProgrma(this.id);
  }
  getData() {
    this.programaSvc.labs().subscribe((res) => {
      this.labs = res;
    });
    this.programaSvc.semestre().subscribe((res) => {
      this.semestre = res;
    });
    this.carreraSvc.getCarreras().subscribe((res) => {
      this.carreras = res;
    });
    this.programaSvc.ciclo().subscribe((res) => {
      this.ciclo = res;
    });
    this.programaSvc.turno().subscribe((res) => {
      this.turno = res;
    });
  }
  updateProgram(): void {
    this.programaSvc.progeama(this.id).subscribe((res) => {
      this.register = res;
    });

    if (!this.programForm.get('carreraId').value)
      this.programForm.patchValue({
        carreraId: this.register?.carreraId,
      });

    if (!this.programForm.get('materia').value) {
      this.programForm.patchValue({
        materia: this.register?.materia,
      });
    }
    if (!this.programForm.get('cicloId').value) {
      this.programForm.patchValue({
        cicloId: this.register?.cicloId,
      });
    }
    if (!this.programForm.get('semestreId').value) {
      this.programForm.patchValue({
        semestreId: this.register?.semestreId,
      });
    }
    if (!this.programForm.get('turnoId').value) {
      this.programForm.patchValue({
        turnoId: this.register?.turnoId,
      });
    }
    if (!this.programForm.get('horario').value) {
      this.programForm.patchValue({
        horario: this.register?.horario,
      });
    }
    this.programaSvc
      .updatePrograma(this.programForm.value, this.id)
      .subscribe((res) => {
        Swal.fire({
          icon: 'success',
          title: 'Actualizacion! con exito',
        });
        this.router.navigate(['/profhome']);
      });
  }
  getProgrma(id: any) {
    this.programaSvc.progeama(id).subscribe((res) => {
      this.register = res;
    });
  }
  initForm(): void {
    this.programForm = this.fb.group({
      carreraId: ['', Validators.required],
      materia: ['', Validators.required],
      cicloId: ['', Validators.required],
      semestreId: ['', Validators.required],
      turnoId: ['', Validators.required],
      horario: ['', Validators.required],
      profesorId: this.profId,
    });
  }
}
