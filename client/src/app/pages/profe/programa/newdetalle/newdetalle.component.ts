import  Swal  from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProgramaService } from 'src/app/service/programa.service';
import { ProfesorService } from 'src/app/service/profesor.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Detalle } from 'src/app/models/detalle';

@Component({
  selector: 'app-newdetalle',
  templateUrl: './newdetalle.component.html',
  styleUrls: ['./newdetalle.component.scss'],
})
export class NewdetalleComponent implements OnInit {
  programas: any;
  dataprograms: any;
  dataprograma: any;
  laboratorios: any;
  detalle = new Detalle();
  detalleForm: FormGroup;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private profesorSvc: ProfesorService,
    private programaSvc: ProgramaService,
    private fb: FormBuilder
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.getLabs();
        this.getDataProgrmas(value.get('id'));
        this.getDetailsProgram(value.get('id'));
        
      }
    });
  }

  getDetailsProgram(id: any) {
    this.profesorSvc.detailsProgramaById(id).subscribe((res) => {
      this.programas = res;
    });
  }
  getLabs() {
    this.programaSvc.labs().subscribe((res) => {
      this.laboratorios = res;
    });
  }
  goToDelete(id: any) {
    this.profesorSvc.deleteDetails(id).subscribe(res=> {
      this.route.paramMap.subscribe((value) => {
        if (value.has('id')) {
          this.getDetailsProgram(value.get('id'));
        }
      });
      
    });
  }
  initForm(): void {
    this.route.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.detalleForm=this.fb.group({
          practica_no: ['', Validators.required],
          practica_nombre: ['', Validators.required],
          objetivo: ['', Validators.required],
          laboratorioId: ['', Validators.required],
          fechas: ['', Validators.required],
          programaId: [value.get('id'), Validators.required],
        });
      }
    });
  }
  saveDetalle(): void {
    if(this.detalleForm.valid){
      const data = this.detalleForm.value;
      this.programaSvc.addDetalle(data).subscribe(res => {
        this.route.paramMap.subscribe((value) => {
          if (value.has('id')) {
            this.getLabs();
            this.getDetailsProgram(value.get('id'));
          }
        });
      })
    }
  }
  getDataProgrmas(id: any){
    this.profesorSvc.programaById(id).subscribe(res=> {
      this.dataprograma=res;
    })
  }
  finish(){
    Swal.fire({
      icon: 'success',
      title: 'Exito!',
      text: 'Tus actividades fueron agregadas correctamente',
    })
    this.router.navigate(['/profhome']);
  }

}
