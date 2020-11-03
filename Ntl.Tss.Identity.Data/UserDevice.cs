using System;
using System.Collections.Generic;
using System.Text;

namespace Ntl.Tss.Identity.Data
{
    public class UserDevice
    {
        public int Id { get; set; }
        public virtual User User { get; set; }
        public string DeviceId { get; set; }
        public string AppVersion { get; set; }
        public string AppToken { get; set; }
        public bool IsActive { get; set; }
    }
}
