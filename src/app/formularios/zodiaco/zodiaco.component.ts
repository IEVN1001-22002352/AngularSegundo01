import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ZodiacoProcesos } from './zodiacoProcesos';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-zodiaco',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './zodiaco.component.html',
  styleUrls: ['./zodiaco.component.css']
})
export class ZodiacoComponent implements OnInit {
  formulario!: FormGroup;
  persona = new ZodiacoProcesos();
  mostrarResultado = false;

  ngOnInit(): void {
    initFlowbite();
    this.formulario = new FormGroup({
      nombre: new FormControl(""),
      paterno: new FormControl(""),
      materno: new FormControl(""),
      dia: new FormControl(0),
      mes: new FormControl(0),
      anio: new FormControl(0),
      sexo: new FormControl("")
    });
  }

  imprimir(): void {
    const datos = this.formulario.value;
    Object.assign(this.persona, datos);

    this.persona.calcularEdad();
    this.persona.calcularSigno();
    this.mostrarResultado = true;
  }
}
