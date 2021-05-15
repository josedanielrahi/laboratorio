import { CarreraService } from './../../service/carrera.service';
import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  carreras: any;
  constructor(private carreraSvc: CarreraService) { 
     
  }

  ngOnInit(): void {
    this.getCarreras();
  }

  getCarreras(){
    this.carreraSvc.getCarreras().subscribe(res =>{
      console.log(res)
      this.carreras=res;
    })
  }

}
