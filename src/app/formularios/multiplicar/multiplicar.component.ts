import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { fromIterable } from 'rxjs/internal/observable/innerFrom';
import { NgIf } from "../../../../node_modules/@angular/common/common_module.d-NEF7UaHr";  

@Component({
  selector: 'app-multiplicar',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './multiplicar.component.html',
  styleUrl: './multiplicar.component.css'
})
export class MultiplicarComponent {
  formulario!: FormGroup;
  resultado!:number;

  constructor(){}
    ngOnInit(): void{
      this.formulario=new FormGroup({
        numero1:new FormControl(''),
        numero2:new FormControl('')
      });
    }
    multNumeros():void{
      let n1=this.formulario.value.numero1;
      let n2=this.formulario.value.numero2;
      this.resultado=n1*n2;
    }
}