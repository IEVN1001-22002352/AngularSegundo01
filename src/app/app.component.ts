import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { AporBComponent } from './formularios/apor-b/apor-b.component';
import { MultiplicarComponent } from './formularios/multiplicar/multiplicar.component';
import { ZodiacoComponent } from './formularios/zodiaco/zodiaco.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TempComponent } from './tem/temp/temp.component';
import { TemhComponent } from './tem/temh/temh.component';


@Component({
  selector: 'app-root',
  imports:[RouterOutlet, DistanciaComponent, MultiplicarComponent, AporBComponent, NavbarComponent, ZodiacoComponent, TempComponent, TemhComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
}
