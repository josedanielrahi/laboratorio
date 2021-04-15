import { Router } from '@angular/router';
import { UsuarioService } from './../../service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  status = 0;
  rol = localStorage.getItem('rol');
  usr: any;
  constructor(
    private fb: FormBuilder,
    private usuarioSvc: UsuarioService,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    if (this.rol != null) {
      if (this.rol == '1') {
        this.router.navigate(['/dashboard']);
      }else if(this.rol == '2'){
        this.router.navigate(['/profhome']);
      }
    }
  }

  validate() {
    this.usuarioSvc
      .validate(this.validateForm.value.usr, this.validateForm.value.psw)
      .subscribe((res) => {
        if (Object.keys(res).length === 0) {
          this.status = 1;
        } else {
          this.usr = res;
          localStorage.setItem('id_usr', this.usr.id);
          localStorage.setItem('usr_name', this.usr.usr);
          localStorage.setItem('rol', this.usr.rolId);
          switch(localStorage.getItem('rol')){
            case  '1':
             this.router.navigate(['/dashboard']);
            break;
            case  '2':
              this.router.navigate(['/profhome']);
            break;
          }
        }
      });
      console.log(localStorage.getItem("rol"));

  }

  initForm(): void {
    this.validateForm = this.fb.group({
      usr: ['', [Validators.required]],
      psw: ['', [Validators.required]],
    });
  }
}
