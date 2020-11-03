using System;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.Models;
using IdentityServer4.Services;
using Microsoft.EntityFrameworkCore;
using Newtonsoft.Json.Linq;
using Ntl.Tss.Identity.Data;

namespace Ntl.Tss.Web
{
    public class UserProfileService : IProfileService
    {
        private readonly TssIdentityDbContext _tssDbContext;
        //private readonly ConfigurationDbContext _configDbContext;

        public UserProfileService(TssIdentityDbContext tssDbContext)//, ConfigurationDbContext configurationDbContext)
        {
            _tssDbContext = tssDbContext;
            //_configDbContext = configurationDbContext;
        }

        public Task GetProfileDataAsync(ProfileDataRequestContext context)
        {

            /*http://docs.identityserver.io/en/3.1.0/reference/profileservice.html */
             
            var subject = context.Subject.FindFirst(a => a.Type == "sub");

            if (subject != null)
            {
                var identity = GetUserClaimsIdentity(Convert.ToInt32(subject.Value));

                context.IssuedClaims.AddRange(identity.Claims);
            }

            return Task.FromResult(0);
        }

        public Task IsActiveAsync(IsActiveContext context)
        {
           /*This should always have IsActive = true*/
            return Task.FromResult(0);
        }

        public ClaimsIdentity GetUserClaimsIdentity(int id)
        {
            var user = _tssDbContext.Users.Include(x => x.Claims).Single(x => x.Id == id);

            var identity = new ClaimsIdentity("JWT");

            foreach (var claim in user.Claims)
            {
                if(claim.ClaimValue!=null)
                    identity.AddClaim(claim.ToClaim());
            }

            identity.AddClaim(new Claim("TokenType", "JWT"));

            identity.AddClaim(new Claim("TokenId", Guid.NewGuid().ToString("N")));

            return identity;
        }
    }
}
