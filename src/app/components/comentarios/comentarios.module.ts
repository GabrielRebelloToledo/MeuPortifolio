import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComentariosComponent } from './comentarios.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/material/material.module';
import { AppMsgErroModule } from '../app-msg-erro/app-msg-erro.module';

@NgModule({
  declarations: [
    ComentariosComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    AppMsgErroModule
  ],
  exports:[
    ComentariosComponent
  ]
})
export class ComentariosModule { }
