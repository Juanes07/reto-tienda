import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { producto } from '../models/producto.models';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private url: string = 'http://localhost:3000/'

  constructor(private http: HttpClient) {}

  getProductos(): Observable<producto[]>{
    let direccion = this.url + 'productos'
    return this.http.get<producto[]>(direccion);
  }

  getProductoPorId(id: any): Observable<producto>{
    let direccion = this.url + 'productos/' + id;
    return this.http.get<producto>(direccion);
  }
}
