using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Ntl.Tss.Web.Models.Account
{
    public class ResetPasswordNotificationModel
    {
        public string FromEmail { get; set; }
        public string ToEmail { get; set; }
        public string ContactName { get; set; }
        public string OrgName { get; set; }
        public string CallBackUrl { get; set; }
    }
}
