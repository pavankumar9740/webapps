using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class RoleClaim : IdentityRoleClaim<int>
    {
        public virtual Role Role { get; set; }
    }
}
