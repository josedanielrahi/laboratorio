import Swal from 'sweetalert2';
import { Component, OnInit } from '@angular/core';
import { RolService } from 'src/app/service/rol.service';
import { UsuarioService } from './../../../../service/usuario.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-usredit',
  templateUrl: './usredit.component.html',
  styleUrls: ['./usredit.component.scss'],
})
export class UsreditComponent implements OnInit {
  roles: any;
  id: any;
  register: any;
  editForm: FormGroup;
  constructor(
    private rolSvc: RolService,
    private userSvc: UsuarioService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.initForm();
    this.id = route.snapshot.params.id;
  }

  ngOnInit(): void {
    this.getRolesData();
    this.getusr();
  }
  editUsr() {
    this.userSvc.getUsrById(this.id).subscribe((res) => {
      this.register = res;
    });
    if (!this.editForm.get('usr').value) {
      this.editForm.patchValue({
        usr: this.register?.usr,
      });
    }
    if (!this.editForm.get('psw').value) {
      this.editForm.patchValue({
        psw: this.register?.psw,
      });
    }
    if (!this.editForm.get('rolId').value) {
      this.editForm.patchValue({
        rolId: this.register?.rolId,
      });
    }
    this.userSvc.updateUsr(this.id, this.editForm.value).subscribe((res) => {
      Swal.fire({
        icon: 'success',
        title: 'Actualizacion! con exito',
      });
      this.router.navigate(['/usrlist']);
    });
  }
  getRolesData() {
    this.rolSvc.getRoles().subscribe((res) => {
      this.roles = res;
    });
  }
  initForm(): void {
    this.editForm = this.fb.group({
      usr: [''],
      psw: [''],
      rolId: [''],
    });
  }
  getusr() {
    this.userSvc.getUsrById(this.id).subscribe((res) => {
      this.register = res;
    });
  }
}
