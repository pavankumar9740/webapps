using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class Role : IdentityRole<int>
    {
        public virtual ICollection<UserRole> UserRoles { get; set; }
        public virtual ICollection<RoleClaim> RoleClaims { get; set; }
    }
}
