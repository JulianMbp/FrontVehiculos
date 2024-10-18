import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

const API_URL_LIST = 'http://localhost:8000/api/vehicle/list';
const API_URL_CREATE = 'http://localhost:8000/api/vehicle/crear-vehiculo';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  
  constructor(private http: HttpClient) {}
  
  //obtener todos los vehiculos
  obtenerVehiculos(): Observable<Vehiculo[]> {
    return this.http.get<Vehiculo[]>(API_URL_LIST);
  }
  //crear un nuevo vehiculo
  crearVehiculos(vehiculo: Vehiculo): Observable<Vehiculo> {
    return this.http.post<Vehiculo>(API_URL_CREATE , Vehiculo);
  }
  obtenerVehiculo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${API_URL_LIST}/${id}`);
  }
}
