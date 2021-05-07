import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProfesorService } from './../../../service/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profesor } from './../../../models/profesor';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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
        console.log('no existe');
      }else{
        this.usrState=1;
        this.profesor=res;
        localStorage.setItem('prof_id',this.profesor[0].id);
      }
    });
  }
  insertData(){
    console.log('form');
    if(this.profeForm.valid){
      const data = this.profeForm.value;
      this.profesorSvc.addprofesor(data).subscribe(res => {
        this.router.navigate(['/profhome']);
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
  goToDetails(id: any){
    this.router.navigate(['detailsprog',id]);

  }

}
