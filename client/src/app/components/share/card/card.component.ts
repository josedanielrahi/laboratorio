import { RolService } from 'src/app/service/rol.service';
import { Component, OnInit } from '@angular/core';
import { CarreraService } from 'src/app/service/carrera.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  carrera: any;
  rol: any;
  constructor(private carreraSvc: CarreraService, private rolSvc: RolService) {}

  ngOnInit(): void {
    this.getCarreras();
    this.getRoles();
  }

  getCarreras() {
    this.carreraSvc.getCarreras().subscribe((res) => {
      this.carrera = res;
    });
  }
  getRoles() {
    this.rolSvc.getRoles().subscribe((res) => {
      this.rol = res;
    });
  }

  // getCarrerasById() {
  //   this.carreraSvc.getCarreraById(1).subscribe( res =>{
  //     console.log(res)
  //     this.carrera=res;
  //   });
  // }
}
