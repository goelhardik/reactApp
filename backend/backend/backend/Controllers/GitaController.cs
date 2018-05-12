using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using backend.Models;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json.Linq;

namespace backend.Controllers
{
    [Route("_apis/gita")]
    public class GitaController : Controller
    {
        [HttpGet("{id}")]
        public Gita GetById(string id)
        {
            var docs = DocumentDBRepository.ReadDocument();
            var result = Gita.FromGraphDoc(docs.First());
            return result;
        }
    }
}
