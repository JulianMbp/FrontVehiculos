export class Vehiculo {
    placa: string;
    marca: string;
    modelo: string;
    color: string;
    id:number;
    color_nombre: string;

    public constructor(id: number, placa: string, marca: string, modelo: string, color: string, 
        color_nombre: string) {
        this.id = id;
        this.placa = placa;
        this.marca = marca;
        this.modelo = modelo;
        this.color = color;
        this.color_nombre = color_nombre;
    }
}