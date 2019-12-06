import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdicionarComponent } from './pessoa/adicionar/adicionar.component';
import { EditarComponent } from './pessoa/editar/editar.component';
import { ConsultarComponent } from './pessoa/consultar/consultar.component';
import { FormsModule } from '@angular/forms';
import { ServiceService } from '../app/service/service.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AdicionarComponent,
    EditarComponent,
    ConsultarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
