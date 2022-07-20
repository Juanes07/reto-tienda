import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { ListProductosComponent } from './components/list-productos/list-productos.component'
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import {CdkVirtualScrollViewport} from '@angular/cdk/scrolling';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListProductosComponent,
    DetalleProductoComponent,
    NavbarComponent,
    NosotrosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PrimeNgModule,
    BrowserAnimationsModule,

  ],
  providers: [CdkVirtualScrollViewport],
  bootstrap: [AppComponent]
})
export class AppModule { }
