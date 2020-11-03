using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class UserToken : IdentityUserToken<int>
    {
        public virtual User User { get; set; }
    }
}
