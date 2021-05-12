import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SalvarContaComponent} from './component/nav/salvar-conta/salvar-conta.component'
import {VerContasComponent} from './component/nav/ver-contas/ver-contas.component'
import {SalvarReceitaComponent} from './component/nav/salvar-receita/salvar-receita.component'

const routes: Routes = [
  {
    path: "",
    component: SalvarContaComponent
  },
  {
    path: "accounts",
    component: VerContasComponent
  },
  {
    path: "income",
    component: SalvarReceitaComponent

  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
