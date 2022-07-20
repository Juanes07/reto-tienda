import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { ListProductosComponent } from './components/list-productos/list-productos.component';
import { NavbarComponent } from './components/navbar/navbar.component';

const routes: Routes = [
  {
    path:'productos', component: ListProductosComponent,
  },
  {
    path:'producto/:id',component:DetalleProductoComponent
  },

  {
    path: '**', pathMatch: 'full', redirectTo:'productos'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
