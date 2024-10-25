import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crear-vehiculos',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './crear-vehiculos.component.html',
  styleUrl: './crear-vehiculos.component.css'
})
export class CrearVehiculosComponent implements OnInit {
  vehiculoForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private vehiculosService: VehiculosService) {}

  ngOnInit()  {
      this.vehiculoForm = this.formBuilder.group({
        placa: ['',[Validators.required, Validators.minLength(6)]],
        marca: ['',[Validators.required, Validators.minLength(2)]],
        color: ['',[Validators.required, Validators.minLength(1)]],
        modelo: ['',[Validators.required, Validators.minLength(4), ]],
      })
  }
  crearVehiculo(vehiculo:Vehiculo) {
    this.vehiculosService.crearVehiculos(vehiculo).subscribe(
      (vehiculoCreado) => {
        alert('Vehiculo Creado con exito!');
        this.vehiculoForm.reset();
      }
    );
  }
}
