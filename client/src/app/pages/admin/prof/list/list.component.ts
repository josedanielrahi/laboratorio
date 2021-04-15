import { Component, OnInit } from '@angular/core';
import { ProfesorService } from 'src/app/service/profesor.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  prodData: any;
  constructor(private profesoresSvc: ProfesorService) {}

  ngOnInit(): void {
    this.getProf();
  }

  getProf() {
    this.profesoresSvc.getProf().subscribe((res) => {
      this.prodData = res;
    });
  }
  goToDetails(id: any): void {
    console.log('detalles registro con el id', id);
  }
  goToEdit(id: any): void {
    console.log('editar registro con el id', id);
  }
  goToDelete(id: any) {
    return this.profesoresSvc.deleteProf(id).subscribe(res =>{
      this.getProf();
    });
  }
}
