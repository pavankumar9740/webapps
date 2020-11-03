using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class UserLogin : IdentityUserLogin<int>
    {
        public virtual User User { get; set; }
    }
}
