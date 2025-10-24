export class ZodiacoProcesos {
  nombre: string = "";
  paterno: string = "";
  materno: string = "";
  dia: number = 0;
  mes: number = 0;
  anio: number = 0;
  sexo: string = "";

  edad: number = 0;
  signo: string = "";

calcularEdad(): void {
  let hoy = new Date();
  this.edad = hoy.getFullYear() - this.anio;

  let mesActual = hoy.getMonth() + 1;
  let diaActual = hoy.getDate();

  // Si aún NO cumple años este año
  if (mesActual < this.mes || (mesActual === this.mes && diaActual < this.dia)) {
    this.edad--;
  }
}


  calcularSigno(): void {
    let resto = this.anio % 12;

    switch (resto) {
      case 0: this.signo = "Mono 🐒"; break;
      case 1: this.signo = "Gallo 🐓"; break;
      case 2: this.signo = "Perro 🐕"; break;
      case 3: this.signo = "Cerdo 🐖"; break;
      case 4: this.signo = "Rata 🐀"; break;
      case 5: this.signo = "Buey 🐂"; break;
      case 6: this.signo = "Tigre 🐅"; break;
      case 7: this.signo = "Conejo 🐇"; break;
      case 8: this.signo = "Dragón 🐉"; break;
      case 9: this.signo = "Serpiente 🐍"; break;
      case 10: this.signo = "Caballo 🐎"; break;
      case 11: this.signo = "Cabra 🐐"; break;
      default: this.signo = "Año inválido";
    }
  }
}
