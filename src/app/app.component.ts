import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DistanciaComponent } from './formularios/distancia/distancia.component';
import { AporBComponent } from './formularios/apor-b/apor-b.component';
import { MultiplicarComponent } from './formularios/multiplicar/multiplicar.component';
import { NavbarComponent } from './navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports:[RouterOutlet, DistanciaComponent, MultiplicarComponent, AporBComponent, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularSegundo01';
}
