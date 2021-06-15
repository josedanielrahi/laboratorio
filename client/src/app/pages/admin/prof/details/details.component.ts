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
  actual: number = 1;
  constructor(
    private router: Router,
    private profesorSvc: ProfesorService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    console.log('i here');
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
  goToDetails(id: any): void {
    this.router.navigate(['/prgramadetails', id]);
  }
  
}
