import { PesquisaComponent } from './rdv/pesquisa/pesquisa.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: 'pesquisa', component: PesquisaComponent },
  { path: 'cadastro', loadChildren: './rdv/rdv.module#RdvModule' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
