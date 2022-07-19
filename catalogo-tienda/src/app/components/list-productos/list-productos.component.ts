import { Component, OnInit } from '@angular/core';
import { producto } from 'src/app/models/producto.models';
import { ProductoService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-list-productos',
  templateUrl: './list-productos.component.html',
  styleUrls: ['./list-productos.component.scss']
})
export class ListProductosComponent implements OnInit {
  productos: producto[] = [];
  detalle:boolean = false;

  constructor(private service: ProductoService) { }

  ngOnInit(): void {
    this.cargarData();
  }

  public cargarData(){
    this.service.getProductos().subscribe(data=>{
      this.productos =  data;
    })

  }

  mostrarDetalle(id:string){
    this.service.getProductoPorId(id).subscribe(data =>{
    })
  }

  toggleProductoDetalle(){
    this.detalle = !this.detalle;
  }

}
