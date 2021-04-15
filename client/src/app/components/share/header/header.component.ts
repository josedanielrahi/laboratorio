import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  condition = localStorage.getItem('id');
  rol = localStorage.getItem('rol');
  constructor(
    private router: Router,
  ) {}
  ngOnInit(): void {
    console.log(this.rol);
  }
  logout(){
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
