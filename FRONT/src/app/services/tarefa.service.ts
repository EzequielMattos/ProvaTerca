import { Tarefa } from './../models/tarefa';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarefaService {
    private baseUrl = "http://localhost:5000/api/tarefa";

    constructor(private http: HttpClient) { }

    list() : Observable<Tarefa[]>{
        return this.http.get<Tarefa[]>(`${this.baseUrl}/list`);
    }

    create(tarefa: Tarefa) : Observable<Tarefa>{
        return this.http.post<Tarefa>(`${this.baseUrl}/create`, tarefa);
    }
}