import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EMPTY, Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Comentarios } from './comentarios';

const API = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})

export class ComentariosService {

  constructor(
    private http: HttpClient
  ) { }

  getAll(): Observable<Comentarios[]> {
    return this.http.get<Comentarios[]>(`${API}api/v1/employees/`);
  }

  create(aluno: Comentarios) {
    return this.http.post(`${API}api/v1/employees/`, aluno).pipe(take(1));
  }

  getById(id) {
    if (!id) return EMPTY;
    return this.http.get<Comentarios>(`${API}api/v1/employees/${id}`);
  }

  update(update) {
    console.log(update)
    return this.http.put(`${API}api/v1/employees/${update.id}`, update).pipe(take(1));
  }

  delete(id) {
    return this.http.delete<Comentarios[]>(`${API}api/v1/employees/${id}`);
  }
}
