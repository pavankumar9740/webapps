using System;
using System.Collections.Generic;
using System.Linq;
using Microsoft.AspNetCore.Http;

namespace Ntl.Tss.Web.Middlewares
{
    public class ProtectFolderOptions
    {
        public PathString Path { get; set; }
    }
}
