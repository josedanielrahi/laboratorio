import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProfesorService } from './../../../service/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from './../../../models/profesor';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  p: number = 1;
  actual: number = 1;
  usrState=9;
  profeForm:FormGroup;
  profesor : any;
  programas : any;
  prof = new Profesor();
  constructor(
    private profesorSvc: ProfesorService,
    private fb: FormBuilder,
    private router: Router) {
      this.initForm();
     }

  ngOnInit(): void {
    this.validateExistProfesor(localStorage.getItem('id_usr'));
    this.getProgramas(localStorage.getItem('id_usr'));

  }

  validateExistProfesor(id : any){
    this.profesorSvc.exist(id).subscribe(res => {
      console.log(res);
      if(Object(res).length===0){
        this.usrState=0;
      }else{
        this.usrState=1;
        this.profesor=res;
        localStorage.setItem('prof_id',this.profesor[0].id);
        //window.location.reload();
      }
    });
  }
  insertData(){
    console.log('form');
    if(this.profeForm.valid){
      const data = this.profeForm.value;
      this.profesorSvc.addprofesor(data).subscribe(res => {
        //this.router.navigate(['/profhome']);
        Swal.fire({
          icon: 'success',
          title: 'Exito!',
          text: 'Listo terminaste el proceso ahora puedes disfrutar de todas las utilidades de esta herramienta'
        })
        this.validateExistProfesor(localStorage.getItem('id_usr'));
      })
    }else{
      console.log('invalido');
    }

  }

  getProgramas(id: any){
    if(localStorage.getItem('prof_id')!=null){
      this.profesorSvc.programaByIdUsr(id).subscribe(res => {
        this.programas=res;
      });
    }

  }
  initForm() : void{
    this.profeForm = this.fb.group({
      nombre : ['',[Validators.required]],
      apellidos : ['',[Validators.required]],
      usrId : localStorage.getItem('id_usr'),
    });
  }
  goToEdit(id: any){
    this.router.navigate(['editprog',id]);
  }
  goToDetails(id: any){
    this.router.navigate(['detailsprog',id]);
  }

  delete(id: any){
    Swal.fire({
      title: 'Estas seguro que lo quieres eliminar?',
      text: "Esta operacion es irrebersible!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Confirmar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.profesorSvc.deletePrograma(id).subscribe(res =>{
          this.ngOnInit();
        });
        Swal.fire(
          'Eliminado!',
          'Operacion realizada con exito.',
          'success'
        )
      }
    })
  }

}
