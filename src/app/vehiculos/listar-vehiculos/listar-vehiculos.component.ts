import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { Router, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-listar-vehiculos',
  standalone: true,
  imports: [NgFor, RouterModule],
  templateUrl: './listar-vehiculos.component.html',
  styleUrl: './listar-vehiculos.component.css'
})
export class ListarVehiculosComponent implements OnInit {
  Vehiculos: Array<Vehiculo> = [];
  constructor(private routerPath: Router, private vehiculosService: VehiculosService) {
    
  }
  ngOnInit(): void {
    this.obtenerVehiculos();
  }
  obtenerVehiculos() {
    this.vehiculosService.obtenerVehiculos().subscribe(vs => {
      this.Vehiculos = vs;
      console.log(this.Vehiculos);
    });
  }
onEditarNavigate(id: number) {
this.routerPath.navigate([`/vehiculos/editar/${id}`]);
}
}
