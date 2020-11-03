using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Net.Http.Headers;

namespace Ntl.Tss.Web.Controllers
{
    public class ManageController : Controller
    {
        [Authorize]
        
        public void Index()
        {
            Response.Redirect("/Dashboard/");
        }
    }
}