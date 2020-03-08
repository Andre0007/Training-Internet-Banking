import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContentComponent } from '../app/content/content.component';
import { CadastroClientesComponent } from '../app/cadastro-clientes/cadastro-clientes.component';
import { HomeLogadaComponent } from '../app/home-logada/home-logada.component';
import { AcessoNegadoComponent } from '../app/acesso-negado/acesso-negado.component';
import { LoginComponent } from '../app/login/login.component';
import { AuthGuard } from 'auth.guard';

const routes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'cadastro-clientes', component: CadastroClientesComponent },
  { path: 'home-logada', component: HomeLogadaComponent, canActivate: [AuthGuard] },
  { path: 'acesso-negado', component: AcessoNegadoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
