using System;

namespace API.Models
{
    public class Tarefa
    {
        public Tarefa(){
            this.CriadoEm = DateTime.Now;
        }

        public int Id {get; set;}
        public string Titulo {get; set;}
        public string Descricao {get; set;}
        public string Responsavel {get; set;}
        public string Prioridade {get; set;}
        public DateTime CriadoEm {get; set;}
    }
}