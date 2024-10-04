import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-vehiculos',
  standalone: true,
  imports: [NgFor, RouterModule ],
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css'
})
export class ListarVehiculosComponent implements OnInit {
  Vehiculos: Array<Vehiculo> = new Array<Vehiculo>();
  constructor(private RouterPath: Router, private vehiculosService: VehiculosService){

  }
  ngOnInit(): void {
  }
}
