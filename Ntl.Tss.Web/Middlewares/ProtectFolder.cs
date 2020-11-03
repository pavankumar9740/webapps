using System.Threading.Tasks;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;

namespace Ntl.Tss.Web.Middlewares
{
    public class ProtectFolder
    {
        private readonly RequestDelegate _next;
        private readonly PathString _path;

        public ProtectFolder(RequestDelegate next, ProtectFolderOptions options)
        {
            _next = next;
            _path = options.Path;
        }

        public async Task Invoke(HttpContext httpContext,
            IAuthorizationService authorizationService)
        {
            if (httpContext.Request.Path.StartsWithSegments(_path))
            {
                var authorized = await httpContext.AuthenticateAsync();
                if (authorized?.Succeeded != true)
                {
                    await httpContext.ChallengeAsync();
                    return;
                }
            }

            await _next(httpContext);
        }
    }
}