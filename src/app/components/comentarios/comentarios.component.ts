
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { Location } from '@angular/common';
import { ComentariosService } from './comentarios.service';
import { Comentarios } from './comentarios';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit {

  alunoForm: FormGroup
  ListaAlunos: Comentarios[] = [];
  novoComentario:boolean = false;
  esconderBotao:boolean = true;
  comentario:boolean = true;
  botaoComentar:boolean = false;
  cont;

  constructor(
    private location: Location,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private AlunoService: ComentariosService
  ) { }

  ngOnInit(): void {
    
    this.pesquisaTodos();

     this.route.params
      .pipe(
        map((params: any) => params['id']),
        switchMap(id => this.AlunoService.getById(id))
      )
      .subscribe(aluno => this.editarForm(aluno)
      );

    this.alunoForm = this.formBuilder.group({
      id: [null],
      first_name: ['', Validators.required],
      email: ['', Validators.required],
      comments: ['', Validators.required],
    }); 

    

  }

  newComentario($info){
    
    this.novoComentario = $info; 
    this.esconderBotao = false;
  }

  pesquisaTodos() {
    this.AlunoService.getAll().subscribe(result => { this.ListaAlunos = result })
  }


  editarForm(aluno: Comentarios) {

    this.alunoForm.patchValue(
      {
        id: aluno[0].id,
        first_name: aluno[0].first_name,
        email: aluno[0].email,
        comments: aluno[0].comments,

      }
    )
  } 

  preencheCampos(aluno: Comentarios) {
    this.alunoForm.patchValue(
      {
        first_name: aluno.first_name,
        email: aluno.email,
        comments: aluno.comments,
        
      });

  } 

 

  verificarForm(){
    const liberar = (<HTMLInputElement>document.getElementById("comentario")).value;
    console.log(liberar)

    this.cont = liberar.length; 

    if(liberar.length > 10){
      console.log('Passou de 10')
      this.botaoComentar = true;

      console.log(this.botaoComentar)
    }else{
      this.botaoComentar = false;
    }
  }

  recarregar(){
    this.alunoForm.reset();
    this.novoComentario = false;
    this.esconderBotao = true;
    this.pesquisaTodos()
  }

   submit() {
    if (this.alunoForm.value.id) {
      const atualizarAluno = this.alunoForm.getRawValue() as Comentarios;
      this.AlunoService.update(atualizarAluno).subscribe(
        success => {
          alert('Aluno atualizado!')
          this.alunoForm.reset()

        },
        error => {
          alert('Erro ao atualizar.')
        }
      )
    } else {
      const novoAluno = this.alunoForm.getRawValue() as Comentarios;
      this.AlunoService.create(novoAluno).subscribe(
        success => {
          alert('Comentário salvo!')
          
          this.recarregar();
        },
        error => {
          alert('Erro ao salvar comentário.')
        }
      )
    }
  } 
}
