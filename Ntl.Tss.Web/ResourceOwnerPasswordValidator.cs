using System;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using IdentityServer4.Models;
using IdentityServer4.Validation;
using Ntl.Tss.Identity.Data;
using Ntl.Tss.Web.Models;
using OtpNet;

namespace Ntl.Tss.Web
{
    public class ResourceOwnerPasswordValidator : IResourceOwnerPasswordValidator
    {

        private readonly TssIdentityDbContext _tssDbContext;
        private readonly OtpKey _otpKey;

        public ResourceOwnerPasswordValidator(TssIdentityDbContext identityServerDbContext, OtpKey otpKey)
        {
            _tssDbContext = identityServerDbContext;
            _otpKey = otpKey;
        }

        public Task ValidateAsync(ResourceOwnerPasswordValidationContext context)
        {
            byte[] secretKey = Encoding.ASCII.GetBytes(_otpKey.Key + context.UserName);

            var phoneNo = "+" + context.UserName;
            var user = _tssDbContext.Users.SingleOrDefault(x => x.PhoneNumber == phoneNo);
            if (user == null)
            {
                context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, Constants.INVALID_PHONE_NUMBER);
                return Task.FromResult(context.Result);
            }

            
            var tOtp = new Totp(secretKey, step: 300, OtpHashMode.Sha1, 4);            

            long timeWindowMatched;
            if (!tOtp.VerifyTotp(context.Password, out timeWindowMatched, new VerificationWindow(1, 0)))
            {
                context.Result = new GrantValidationResult(TokenRequestErrors.InvalidGrant, Constants.INVALID_OTP);
                return Task.FromResult(context.Result);
            }

            context.Result = new GrantValidationResult(subject: user.Id.ToString(), authenticationMethod: "Custom", authTime: DateTime.UtcNow);//Additional claims will be part of IProfileService

            return Task.FromResult(context.Result);
        }
    }
}
