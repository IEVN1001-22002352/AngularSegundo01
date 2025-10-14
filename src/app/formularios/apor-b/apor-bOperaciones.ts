export class aporbOperaciones {
  a: number = 0;
  b: number = 0;
  resultadoAporB: number = 0;
  pasos: number[] = []; // arreglo donde guardamos los valores sumados

  multiplicar(): void {
    this.resultadoAporB = 0;
    this.pasos = []; // limpiamos el array antes de empezar

    for (let i = 0; i < this.a; i++) {
      this.pasos.push(this.b); // guardamos cada valor sumado
      this.resultadoAporB += this.b;
    }
  }
}

