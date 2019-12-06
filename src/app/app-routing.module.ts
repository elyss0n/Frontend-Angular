import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './pessoa/consultar/consultar.component';
import { AdicionarComponent } from './pessoa/adicionar/adicionar.component';
import { EditarComponent } from './pessoa/editar/editar.component';


const routes: Routes = [
  {path: 'consultar', component: ConsultarComponent},
  {path: 'adicionar', component: AdicionarComponent},
  {path: 'editar', component: EditarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
