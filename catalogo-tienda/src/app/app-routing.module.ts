import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';

const routes: Routes = [
  {
    path:'listaproductos', component: ListProductosComponent,

  },
  {
    path:'producto/:id', component:DetalleProductoComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
