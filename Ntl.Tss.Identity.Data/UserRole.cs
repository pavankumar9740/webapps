using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class UserRole : IdentityUserRole<int>
    {
        public virtual User User { get; set; }
        public virtual Role Role { get; set; }
    }
}
