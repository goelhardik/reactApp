using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using backend.Models;

namespace backend.Controllers
{
    [Route("_apis/[controller]")]
    public class HomeController : Controller
    {
        [HttpGet]
        public ButtonModel Get()
        {
            return new ButtonModel { Value = "Testing" };
        }
    }
}
