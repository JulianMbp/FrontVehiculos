import { Routes } from '@angular/router';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculosComponent } from './vehiculos/crear-vehiculos/crear-vehiculos.component';

export const routes: Routes = [{
    path: '',
    component: ListarVehiculosComponent,
    },
    {
    path:'crear-vehiculo',
    component: CrearVehiculosComponent,
    }
];
