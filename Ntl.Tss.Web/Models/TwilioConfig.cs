using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ntl.Tss.Web.Models
{
    public class TwilioConfig
    {
        public string Sid { get; set; }
        public string AuthToken { get; set; }
        public string Phone { get; set; }
    }

    public class OtpKey
    {
        public string Key { get; set; }
    }
}
