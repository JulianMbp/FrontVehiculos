import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Vehiculo } from '../vehiculo';
import { VehiculosService } from '../vehiculos.service';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vehiculos-edit',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, FormsModule],
  templateUrl: './vehiculos-edit.component.html',
  styleUrl: './vehiculos-edit.component.css'
})

export class EditarVehiculosComponent implements OnInit {
  vehiculoForm!: FormGroup;
  vehiculo:Vehiculo = new Vehiculo(1, '', '', '', '', '');
  idVehiculo: string = '';//cambiar
  
  constructor(private formBuilder: FormBuilder, private route: ActivatedRoute, private vehiculosService: VehiculosService) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idVehiculo = params['id'];

      this.vehiculosService.obtenerVehiculos(parseInt(this.idVehiculo)).subscribe(ve => {
        /* this.vehiculo = ve; */
        this.initForm();
      });
    });
    }
  
  initForm() {
    this.vehiculoForm = this.formBuilder.group({
      placa: [this.vehiculo?.placa||'',[Validators.required]],
      marca: [this.vehiculo?.marca||'',[Validators.required, Validators.minLength(2)]],
      color_vehiculo: [this.vehiculo?.color_vehiculo||'',[Validators.required, Validators.minLength(1)]],
      modelo: [this.vehiculo?.modelo||'',[Validators.required, Validators.minLength(4)]],

    })
  }
  editarVeichulo(vehiculo:Vehiculo): void{
    this.vehiculosService.editarVehiculo(vehiculo, this.vehiculo.id).subscribe((vehi)=>{
      alert('Vehiculo editado con exito');
    });   
  }
}
