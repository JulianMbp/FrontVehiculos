export class Vehiculo {
    placa: string;
    marca: string;
    modelo: string;
    color_vehiculo: string;
    id:number;
    color_vehiculo_nombre: string;

    public constructor(id: number, placa: string, marca: string, modelo: string, color_vehiculo: string, 
        color_vehiculo_nombre: string) {
        this.id = id;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.color_vehiculo = color_vehiculo;
        this.color_vehiculo_nombre = color_vehiculo_nombre;
    }
}