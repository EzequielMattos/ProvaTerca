using System.Linq;
using API.Data;
using API.Models;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    [Route("api/tarefa")]

    public class TarefaController : ControllerBase
    {
        private readonly DataContext _context;
        public TarefaController(DataContext context){
            _context = context;
        }

        //POST: api/tarefa/create
        [HttpPost]
        [Route("create")]

        public IActionResult Create([FromBody]Tarefa tarefa){
            Tarefa titulo = _context.TabelaTarefas.FirstOrDefault(
                t => t.Titulo == tarefa.Titulo
            );
            if(titulo == null){
                _context.TabelaTarefas.Add(tarefa);
                _context.SaveChanges();
                return Created("", tarefa);
            }
            return NotFound($"ERRO: Essa Tarefa {tarefa.Titulo} Já Esta Cadastrada No Sistema! Espero Que O Responsavel Conclua A Mesma O Mais Rápido Possivel!");
        }

        //GET: api/tarefa/list
        [HttpGet]
        [Route("list")]
        public IActionResult List(){
            return Ok(_context.TabelaTarefas.ToList());
        }
    }

}

