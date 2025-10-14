import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperacionesDistancia } from './operacionesDistancia';

@Component({
  selector: 'app-distancia',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './distancia.component.html',
  styleUrls: ['./distancia.component.css']
})
export class DistanciaComponent implements OnInit {
  formularioDistancia!: FormGroup;
  resultadoDistancia: number = 0;
  operacion = new OperacionesDistancia();
  
  ngOnInit(): void {
    this.formularioDistancia = new FormGroup({
      numX1: new FormControl(0),
      numY1: new FormControl(0),
      numX2: new FormControl(0),
      numY2: new FormControl(0),
    });
  }
    resolver(): void {
    let valores = this.formularioDistancia.value;


    this.operacion.x1 = valores.numX1;
    this.operacion.y1 = valores.numY1;
    this.operacion.x2 = valores.numX2;
    this.operacion.y2 = valores.numY2;

    this.operacion.resolver();

    this.resultadoDistancia = this.operacion.resultadoDistancia;
  }
}
