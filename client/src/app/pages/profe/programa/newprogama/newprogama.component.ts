import { Router } from '@angular/router';
import { Programa } from 'src/app/models/programa';


import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/service/carrera.service';
import { ProgramaService } from 'src/app/service/programa.service';


@Component({
  selector: 'app-newprogama',
  templateUrl: './newprogama.component.html',
  styleUrls: ['./newprogama.component.scss'],
})
export class NewprogamaComponent implements OnInit {
    programa = new Programa();
    carreras : any;
    labs: any;
    ciclo : any;
    semestre : any;
    turno:any;
    programForm : FormGroup;
    profId= localStorage.getItem('prof_id');

  constructor(
    private programaSvc: ProgramaService,
    private carrearSvc: CarreraService,
    private fb: FormBuilder,
    private router: Router, 
    ) {this.initForm();}

  ngOnInit(): void {
    this.getData();
    console.log(localStorage.getItem('prof_id'));
  }

  getData() {
    this.programaSvc.labs().subscribe(res =>{
      this.labs=res;
    });
    this.programaSvc.semestre().subscribe( res =>{
      this.semestre=res;
    });
    this.carrearSvc.getCarreras().subscribe(res => {
      this.carreras=res;
    });
    this.programaSvc.ciclo().subscribe(res => {
     this.ciclo=res;
    });
    this.programaSvc.turno().subscribe(res => {
      this.turno=res;
     });
  }
  saveProgram (): void {
    if(this.programForm.valid){
      const data = this.programForm.value;
      this.programaSvc.addProgram(data).subscribe(res =>{
        this.programaSvc.last(localStorage.getItem('prof_id')).subscribe(res=>{
          this.router.navigate(['newdetalle/',res[0].id]);
        })
      });
    }
  }
  initForm(): void{
    this.programForm = this.fb.group({
        carreraId : ['',[Validators.required]],
        materia : ['',[Validators.required]],
        cicloId : ['',[Validators.required]],
        semestreId : ['',[Validators.required]],
        turnoId : ['',[Validators.required]],
        horario: ['',[Validators.required]],
        profesorId : this.profId,
    });
  }

}
