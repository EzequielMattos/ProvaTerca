using System;

namespace API.Models
{
    public class Tarefa
    {
        public Tarefa(){
            this.CriadoEm = DateTime.Now;
        }

        public int id {get; set;}
        public string titulo {get; set;}
        public string descricao {get; set;}
        public string responsavel {get; set;}
        public string prioridade {get; set;}
        public DateTime CriadoEm {get; set;}
    }
}