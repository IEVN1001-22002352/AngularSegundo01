import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { aporbOperaciones } from './apor-bOperaciones';
import { initFlowbite } from 'flowbite';

@Component({
  selector: 'app-apor-b',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './apor-b.component.html',
  styleUrls: ['./apor-b.component.css']
})

export class AporBComponent implements OnInit {
  formularioAporB!: FormGroup;
  resultadoAporB: number = 0;
  pasos: number[] = [];
  operacion = new aporbOperaciones();

  ngOnInit(): void {
    initFlowbite();
    this.formularioAporB = new FormGroup({
      a: new FormControl(0),
      b: new FormControl(0)
    });
  }

  multiplicar(): void {
    let valores = this.formularioAporB.value;

    this.operacion.a = valores.a;
    this.operacion.b = valores.b;

    this.operacion.multiplicar();

    this.resultadoAporB = this.operacion.resultadoAporB;
    this.pasos = this.operacion.pasos;
  }
}
