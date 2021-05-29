import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProgramaService } from 'src/app/service/programa.service';
import { Lista } from 'src/app/models/lista';
import { ListaService } from 'src/app/service/lista.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  estuandtes: any;
  id: any;
  existe: number;
  lita: any;
  data: any;
  mat:any;
  aisyencia = new Lista();
  matriculaForm: FormGroup;
  alumnoForm: FormGroup;
  constructor(
    private programaSvc: ProgramaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private listaSvc: ListaService
  ) {
    this.initForm();
    this.initFormAlumno();
    this.id = this.route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.lista(this.id);
  }
  lista(id: any) {
    this.programaSvc.asistencia(id).subscribe((res) => {
      this.estuandtes = res;
    });
  }
  initForm(): void {
    this.matriculaForm = this.fb.group({
      alumnoId:[''],
      matricula: ['', Validators.required],
      observacion: [''],
      detalle_programaId:[''],
    });
  }
  initFormAlumno():void {
    this.alumnoForm=this.fb.group({
      matricula:[''],
      nombre:['',Validators.required],
      apellidos:['',Validators.required],
    })
  }
  cancelar(){
    this.existe=1;
  }
  saveAlumno(){
    if(this.alumnoForm.valid){
      this.alumnoForm.patchValue({
        matricula:this.mat
      });
      const data = this.alumnoForm.value;
      this.listaSvc.addEstudiante(data).subscribe(res=>{
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Alumno gurdado exitosamente con la matricula'+this.mat+' vuelva a insertar la matricula para agregar a la lista de asistencia',
          showConfirmButton: false,
          timer: 3500
        })
        this.existe=1;
      })
    }
  }
  saveLista() {
    if (this.matriculaForm.valid) {
      const data = this.matriculaForm.value;
      this.listaSvc.getEstudiante(data.matricula).subscribe((res) => {
        this.data = res;
        if (Object.keys(this.data).length === 0) {
          this.existe=0;
          this.mat=this.matriculaForm.value.matricula;
        }else{
          this.matriculaForm.patchValue({
            alumnoId: this.data.id,
            detalle_programaId:this.id
          });
          this.listaSvc.addLista(this.matriculaForm.value).subscribe(res=>{
            this.lista(this.id);
            
          });
          this.matriculaForm.reset();
        }
      });
    }

    console.log(this.matriculaForm.value);
  }
}
