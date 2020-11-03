using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class UserClaim : IdentityUserClaim<int>
    {
        public virtual User User { get; set; }
    }
}
