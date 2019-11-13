import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CadastroComponent } from './cadastro/cadastro.component';
import { PesquisaComponent } from './pesquisa/pesquisa.component';

const routes: Routes = [
  {
    path: '',
    component: PesquisaComponent
  },
  {
    path: 'novo',
    component: CadastroComponent
  },
  {
    path: ':codigoRdv',
    component: CadastroComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RdvRoutingModule { }
