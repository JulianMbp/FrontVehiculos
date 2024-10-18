import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vehiculo } from './vehiculo';

const API_URL_LIST = 'http://localhost:8000/api/vehicle/list';

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
    return this.http.post<Vehiculo>('http://127.0.0.1:8000/api/vehicle/crear-vehiculo' , vehiculo);
  }
  obtenerVehiculo(id: number): Observable<Vehiculo> {
    return this.http.get<Vehiculo>(`${API_URL_LIST}/${id}`);
  }
}
