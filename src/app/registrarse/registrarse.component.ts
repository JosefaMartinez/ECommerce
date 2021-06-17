import { Component, OnInit } from '@angular/core';
import {FormGroup,Validators,FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-registrarse',
  templateUrl: './registrarse.component.html',
  styleUrls: ['./registrarse.component.scss']
})
export class RegistrarseComponent implements OnInit 
{
  formulario:FormGroup;
  formularioAUX:any;
  formularioAUXMOD = {
    id: null,
    titulo: null,
    estado: null,
    descripcion: null
  }
  submitted = false;
  constructor(private formBuilder: FormBuilder)
  { 
    this.formulario = this.formBuilder.group({
    }); 
  }

  ngOnInit(): void {
  }

  actualizar() 
    { 
      this.submitted = true;
      if (this.formulario.invalid) {
          return;
      }
    }

}
