import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { producto } from 'src/app/models/producto.models';
import { ProductoService } from 'src/app/services/producto-service.service';

@Component({
  selector: 'app-detalle-producto',
  templateUrl: './detalle-producto.component.html',
  styleUrls: ['./detalle-producto.component.scss']
})
export class DetalleProductoComponent implements OnInit {

  producto: producto ={
    id: 0,
    nombre: '',
    descripcion: '',
    cantidad: 0,
    precio: '',
    image: ''
  }

  constructor(private service: ProductoService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.service.getProductoPorId(params['id']).subscribe((data)=>{
        this.producto = data;
      })
    })

  }

}
