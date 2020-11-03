using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using Ntl.Tss.Identity.Data;

namespace Ntl.Tss.Identity.Data.Seed
{
    public class CreateUsers
    {
        private ServiceCollection Services { get; set; }
        public CreateUsers(string connectionString)
        {
            Services = new ServiceCollection();
            Services.AddLogging();
            Services.AddDbContext<TssIdentityDbContext>(options =>
               options.UseSqlServer(connectionString));

            Services.AddIdentity<Identity.Data.User, Role>()
                .AddEntityFrameworkStores<TssIdentityDbContext>()
                .AddDefaultTokenProviders();

            Services.AddIdentityServer()
                .AddDeveloperSigningCredential()
                .AddConfigurationStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(connectionString);
                })
                // this adds the operational data from DB (codes, tokens, consents)
                .AddOperationalStore(options =>
                {
                    options.ConfigureDbContext = builder =>
                        builder.UseSqlServer(connectionString);

                    // this enables automatic token cleanup. this is optional.
                    options.EnableTokenCleanup = true;
                    options.TokenCleanupInterval = 30;
                });
        }

        public void CreateAdminUser()
        {
            using (var serviceProvider = Services.BuildServiceProvider())
            {
                using (var scope = serviceProvider.GetRequiredService<IServiceScopeFactory>().CreateScope())
                {
                    var userMgr = scope.ServiceProvider.GetRequiredService<UserManager<User>>();

                    var ntlAdminUser = new User
                    {
                        UserName = "tsspadmin@ntl.com",
                        Email = "tsspadmin@ntl.com",
                        PhoneNumber = "1111111111",
                        IsActive = true
                    };
                    var result = userMgr.CreateAsync(ntlAdminUser, "Admin@123").Result;
                    if (!result.Succeeded)
                    {
                        throw new Exception(result.Errors.First().Description);
                    }

                    var x = userMgr.AddClaimsAsync(ntlAdminUser, new List<Claim>
                    {
                        new Claim("OrgType", "Ntl"),
                        new Claim("OrgName", "Ntl"),
                        new Claim("OrgId","1"),
                        new Claim("GivenName","Admin"),
                        new Claim("Role", "TsspAdmin")
                    }).Result;
                    if (!x.Succeeded)
                    {
                        throw new Exception(x.Errors.First().Description);
                    }

                    var taxAuthAdmin = new User
                    {
                        UserName = "taxAuthAdmin@gg.com",
                        Email = "taxAuthAdmin@gg.com",
                        PhoneNumber = "1111111111",
                        IsActive = true
                    };
                    var a = userMgr.CreateAsync(taxAuthAdmin, "Admin@123").Result;
                    if (!a.Succeeded)
                    {
                        throw new Exception(a.Errors.First().Description);
                    }

                    var b = userMgr.AddClaimsAsync(taxAuthAdmin, new List<Claim>
                    {
                        new Claim("OrgType", "TaxAuthority"),
                        new Claim("OrgName", "GhanaGovernment"),
                        new Claim("OrgId","2"),
                        new Claim("GivenName","TaxAuthAdmin"),
                        new Claim("Role", "TaxAuthAdmin")
                    }).Result;
                    if (!b.Succeeded)
                    {
                        throw new Exception(b.Errors.First().Description);
                    }

                    var printPartnerAdmin = new User
                    {
                        UserName = "printPartner@pp.com",
                        Email = "printPartner@pp.com",
                        PhoneNumber = "1111111111",
                        IsActive = true
                    };
                    var c = userMgr.CreateAsync(printPartnerAdmin, "Admin@123").Result;
                    if (!c.Succeeded)
                    {
                        throw new Exception(c.Errors.First().Description);
                    }

                    var d = userMgr.AddClaimsAsync(printPartnerAdmin, new List<Claim>
                    {
                        new Claim("OrgType", "PrintPartner"),
                        new Claim("OrgName", "PrintPartner1"),
                        new Claim("OrgId","3"),
                        new Claim("GivenName","PrintPartner"),
                        new Claim("Role", "PrintPartner")
                    }).Result;
                    if (!d.Succeeded)
                    {
                        throw new Exception(d.Errors.First().Description);
                    }
                }
            }
        }

    }
}
