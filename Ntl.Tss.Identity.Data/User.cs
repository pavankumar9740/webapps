using System.Collections.Generic;
using Microsoft.AspNetCore.Identity;

namespace Ntl.Tss.Identity.Data
{
    public class User : IdentityUser<int>
    {
        public virtual ICollection<UserClaim> Claims { get; set; }
        public virtual ICollection<UserLogin> Logins { get; set; }
        public virtual ICollection<UserToken> Tokens { get; set; }
        public virtual ICollection<UserRole> UserRoles { get; set; }
        public bool IsActive { get; set; }

    }
}
