
import { Routes } from '@angular/router';
import { ListarVehiculosComponent } from './vehiculos/listar-vehiculos/listar-vehiculos.component';
import { CrearVehiculosComponent } from './vehiculos/crear-vehiculos/crear-vehiculos.component';
import { EditarVehiculosComponent} from './vehiculos/vehiculos-edit//vehiculos-edit.component'

export const routes: Routes = [{
    path: '',
    component: ListarVehiculosComponent,
    },
    {
    path:'crear-vehiculo',
    component: CrearVehiculosComponent,
    },
    {
        path:'editar-vehiculo/:id',
        component: EditarVehiculosComponent
    }
];
