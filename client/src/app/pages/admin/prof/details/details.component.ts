import { ProfesorService } from 'src/app/service/profesor.service';
import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss'],
})
export class DetailsComponent implements OnInit {
  idusr: any;
  dataProf: any;
  programas: any;  
  vendefores = {
    vendedor1 :{
      nombre:"Juan",
      cantidad: 10
    },
    vendedor2 :{
      nombre:"Alex",
      cantidad: 8
    },
    vendedor3 :{
      nombre:"Daniel",
      cantidad: 3
    }
  }
  constructor(
    private router: Router,
    private profesorSvc: ProfesorService,
    private route: ActivatedRoute
  ) {}



  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.getDataProf(value.get('id'));
        this.getProgramasByUsrId(value.get('id'));
      } else {
        this.router.navigate(['/dashboard']);
      }
    });
  }

  getDataProf(id: any) {
    this.profesorSvc.profesorByIdUsr(id).subscribe((res) => {
      this.dataProf = res;
    });
  }
  getProgramasByUsrId(id: any) {
    this.profesorSvc.programaByIdUsr(id).subscribe((res) => {
      this.programas = res;
      console.log(res);
    });
  }
  goToDetails(id:any):void{
    this.router.navigate(['/prgramadetails',id]);
  }

}
