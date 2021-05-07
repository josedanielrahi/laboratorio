import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  prodData: any;
  id: any;
  navigationExtras: NavigationExtras = {
    state: {
      value: null,
    },
  };
  constructor(private profesoresSvc: ProfesorService, private router: Router) {}

  ngOnInit(): void {
    this.getProf();
  }

  getProf() {
    this.profesoresSvc.getProf().subscribe((res) => {
      this.prodData = res;
    });
  }
  goToDetails(idusr: any): void {
    console.log(idusr);
    this.router.navigate(['/detailsprof',idusr]);
  }
  goToEdit(id: any): void {
    console.log('Edit');
  }
  goToDelete(id: any) {
    return this.profesoresSvc.deleteProf(id).subscribe((res) => {
      this.getProf();
    });
  }
}
