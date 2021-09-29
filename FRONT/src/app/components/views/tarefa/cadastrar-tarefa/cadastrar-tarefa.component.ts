import { TarefaService } from './../../../../services/tarefa.service';
import { Tarefa } from './../../../../models/tarefa';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar-tarefa',
  templateUrl: './cadastrar-tarefa.component.html',
  styleUrls: ['./cadastrar-tarefa.component.css']
})
export class CadastrarTarefaComponent implements OnInit {

    titulo!: string;
    descricao!: string;
    responsavel!: string;
    prioridade!: string;

    constructor(private router: Router, private service: TarefaService){}

        ngOnInit():void{
        }

        cadastrar(): void{
            let tarefa : Tarefa ={

                titulo: this.titulo,
                descricao: this.descricao,
                responsavel: this.responsavel,
                prioridade: this.prioridade,
            };
            this.service.create(tarefa).subscribe(tarefa => {
                console.log(tarefa);
                this.router.navigate(["tarefa/listar"]);
            })
        }
}
