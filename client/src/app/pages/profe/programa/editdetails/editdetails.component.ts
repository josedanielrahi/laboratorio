import  Swal  from 'sweetalert2';
import { ProgramaService } from 'src/app/service/programa.service';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Detalle } from 'src/app/models/detalle';


@Component({
  selector: 'app-editdetails',
  templateUrl: './editdetails.component.html',
  styleUrls: ['./editdetails.component.scss'],
})
export class EditdetailsComponent implements OnInit {
  id: any;
  laboratorios: any;
  editForm: FormGroup;
  alumnoForm: FormGroup;
  detalle = new Detalle();
  register: any;
  constructor(
    private programaSvc: ProgramaService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
  ) {
    this.id = route.snapshot.params.id;
    this.initForm();
  }

  ngOnInit(): void {
    this.getLabs();
    this.getDetails();
  }
  initForm(): void {
    this.editForm = this.fb.group({
      practica_no: ['', Validators.required],
      practica_nombre: ['', Validators.required],
      objetivo: ['', Validators.required],
      laboratorioId: ['', Validators.required],
      fechas: ['', Validators.required],
      programaId: ['', Validators.required],
    });
  }
  getLabs() {
    this.programaSvc.labs().subscribe((res) => {
      this.laboratorios = res;
    });
  }
  getDetails() {
    this.programaSvc.getDetailsById(this.id).subscribe((res) => {
      this.register = res;
    });
  }

  updateDetails() {
    this.getDetails();
    if (!this.editForm.get('practica_no').value) {
      this.editForm.patchValue({
        practica_no: this.register?.practica_no,
      });
    }
    if (!this.editForm.get('practica_nombre').value) {
      this.editForm.patchValue({
        practica_nombre: this.register?.practica_nombre,
      });
    }
    if (!this.editForm.get('objetivo').value) {
      this.editForm.patchValue({
        objetivo: this.register?.objetivo,
      });
    }
    if (!this.editForm.get('laboratorioId').value) {
      this.editForm.patchValue({
        laboratorioId: this.register?.laboratorioId,
      });
    }
    if (!this.editForm.get('fechas').value) {
      this.editForm.patchValue({
        fechas: this.register?.fechas,
      });
    }
    if (!this.editForm.get('programaId').value) {
      this.editForm.patchValue({
        programaId: this.register?.programaId,
      });
    }

    this.programaSvc.updateDetails(this.editForm.value,this.id).subscribe(res=> {
      Swal.fire({
        icon: 'success',
        title: 'Exito!.',
        text: 'Se actualizo correctamnete!',
      });
      this.router.navigate(['/profhome']);
    })
  }
}
