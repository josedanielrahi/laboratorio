import { ProfesorService } from 'src/app/service/profesor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-programa',
  templateUrl: './programa.component.html',
  styleUrls: ['./programa.component.scss']
})
export class ProgramaComponent implements OnInit {
  programas: any;
  details: any
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesorSvc: ProfesorService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(value =>{
      if(value.has('id')){
        this.getPrograma(value.get('id'));
        this.getDetails(value.get('id'));
      }else{
        this.router.navigate(['/dashboard']);
      }

    });
  }
  getPrograma(id: any){
    this.profesorSvc.programaById(id).subscribe(res => {
      this.programas=res;

    })
  }
  getDetails(id: any){
    this.profesorSvc.detailsProgramaById(id).subscribe(res => {
      this.details=res;    
    });
  }
  list(id){
    id == null ? this.router.navigate(['/dashboard']) : this.router.navigate(['asistencia',id])
  }

}
