import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicacoesMobilesComponent } from './components/aplicacoes-mobiles/aplicacoes-mobiles.component';
import { AplicacoesWebComponent } from './components/aplicacoes-web/aplicacoes-web.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { InicioComponent } from './components/inicio/inicio.component';

const routes: Routes = [
  {
    path:"",
    component:InicioComponent
  },
  {
    path:"experiencias",
    component:ExperienciasComponent
  },
  {
    path:"certificados",
    component:CertificadosComponent
  },
  {
    path:"aplicacoes/mobiles",
    component:AplicacoesMobilesComponent
  },
  {
    path:"aplicacoes/web",
    component:AplicacoesWebComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
