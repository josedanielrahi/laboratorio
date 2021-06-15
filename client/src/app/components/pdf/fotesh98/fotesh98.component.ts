import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProfesorService } from 'src/app/service/profesor.service';
import { jsPDF } from 'jspdf';
@Component({
  selector: 'app-fotesh98',
  templateUrl: './fotesh98.component.html',
  styleUrls: ['./fotesh98.component.scss'],
})
export class FOTESH98Component implements OnInit {
  programas: any;
  dataprograma: any;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private profesorSvc: ProfesorService
  ) {}
  @ViewChild('example', { static: false }) el!: ElementRef;
  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      if (value.has('id')) {
        this.getDetailsProgam(value.get('id'));
        this.getPrograma(value.get('id'));
      } else {
        this.router.navigate(['/profehome']);
      }
    });
  }

  getDetailsProgam(id: any) {
    this.profesorSvc.detailsProgramaById(id).subscribe((res) => {
      this.programas = res;
    });
  }
  getPrograma(id: any) {
    this.profesorSvc.programaById(id).subscribe((res) => {
      this.dataprograma = res;
      console.log(this.dataprograma);
    });
  }
  downlad() {
    console.log(this.el);
    let pdf = new jsPDF('p', 'pt', 'a4');
    pdf.html(this.el.nativeElement, {
      callback: (pdf) => {
        pdf.save('programa.pdf');
      },
    });
  }
}
