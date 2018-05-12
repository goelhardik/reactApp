using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models;
using Newtonsoft.Json.Linq;

namespace backend.Controllers
{
    [Route("_apis/[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public async Task<ButtonModel> Get()
        {
            var button = new ButtonModel { Value = "Testing" };
            await DocumentDBRepository.CreateDocument(JObject.FromObject(button));
            var docs = DocumentDBRepository.ReadDocument();
            var result = ButtonModel.FromGraphDoc(docs.First());
            return result;
        }
    }
}
