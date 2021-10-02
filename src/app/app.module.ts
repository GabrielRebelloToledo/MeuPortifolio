import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AplicacoesMobilesComponent } from './components/aplicacoes-mobiles/aplicacoes-mobiles.component';
import { AplicacoesWebComponent } from './components/aplicacoes-web/aplicacoes-web.component';
import { CertificadosComponent } from './components/certificados/certificados.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { FooterComponent } from './views/footer/footer.component';
import { HeaderComponent } from './views/header/header.component';
import { MenuComponent } from './views/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    AplicacoesMobilesComponent,
    AplicacoesWebComponent,
    CertificadosComponent,
    InicioComponent,
    ExperienciasComponent,
    FooterComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
