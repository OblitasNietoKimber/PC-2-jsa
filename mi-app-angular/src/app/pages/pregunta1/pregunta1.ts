import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pregunta1',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pregunta1.html',
  styleUrl: './pregunta1.css',
})
export class Pregunta1 {

  cod: string = '';
  nombre: string = '';

  n1: number = 0;
  n2: number = 0;
  n3: number = 0;
  n4: number = 0;

  suma: number = 0;
  promedio: number = 0;

  estado: string = '';
  mensaje: string = '';
  observacion: string = '';

  procesar(): void {

    this.suma =
      Number(this.n1) +
      Number(this.n2) +
      Number(this.n3) +
      Number(this.n4);

    this.promedio = this.suma / 4;

    if (this.promedio >= 13) {

      this.estado = 'Aprobado';

    } else {

      this.estado = 'Desaprobado';
    }

    this.Observaciones();

    this.mensaje = 'Proceso realizado correctamente.';
  }

  Observaciones(): void {

    if (this.promedio >= 17) {

      this.observacion = 'Su rendimiento fue excelente';

    } else if (this.promedio < 13) {

      this.observacion = 'Usted está en riesgo';

    } else {

      this.observacion = 'Su rendimiento es regular';
    }
  }

  limpiarFormulario(): void {

    this.cod = '';
    this.nombre = '';

    this.n1 = 0;
    this.n2 = 0;
    this.n3 = 0;
    this.n4 = 0;

    this.suma = 0;
    this.promedio = 0;

    this.estado = '';
    this.observacion = '';
    this.mensaje = '';
  }
}