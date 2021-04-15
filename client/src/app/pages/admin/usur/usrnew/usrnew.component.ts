import { Router } from '@angular/router';
import { UsuarioService } from './../../../../service/usuario.service';

import { Usuario } from './../../../../models/Usuario';
import { RolService } from 'src/app/service/rol.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-usrnew',
  templateUrl: './usrnew.component.html',
  styleUrls: ['./usrnew.component.scss'],
})
export class UsrnewComponent implements OnInit {
  roles: any;
  usuario = new Usuario();
  usrForm: FormGroup;
  constructor(
    private rolSvc: RolService,
    private userSvc: UsuarioService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.initForm();
  }

  ngOnInit(): void {
    this.getRolesData();
  }

  getRolesData() {
    this.rolSvc.getRoles().subscribe((res) => {
      this.roles = res;
    });
  }
  isValidField(field: string): string {
    const validatedField = this.usrForm.get(field);
    return !validatedField.valid && validatedField.touched
      ? 'is-invallid'
      : validatedField.touched
      ? 'is-valid'
      : '';
  }
  insertUsr(): void {
    if (this.usrForm.valid) {
      const data = this.usrForm.value;
      this.userSvc.insertUsr(data).subscribe((res) => {
        console.log(res);
      });
    }
    this.router.navigate(['usrlist']);
  }

  initForm(): void {
    this.usrForm = this.fb.group({
      usr: ['', [Validators.required]],
      psw: ['', [Validators.required]],
      rolId: ['', [Validators.required]],
    });
  }
}
