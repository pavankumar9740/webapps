using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace Ntl.Tss.IdentityServer4.Seed
{
    public static class Config
    {
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "Host",
                    AllowedGrantTypes =  GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes= new []{ "ProductManagementApi", "VendorManagementApi", "OrderManagementApi" }
                },
                new Client
                {
                    ClientId = "ConsumerMobileAPP",
                    AllowedGrantTypes =  GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes= new []{ "ProductManagementApi" }
                },
                new Client
                {
                    ClientId = "ProductManagementApp",
                    AllowedGrantTypes =  GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes= new []{ "ProductManagementApi" }
                },
                new Client
                {
                    ClientId = "MFRegistrationApp",
                    AllowedGrantTypes =  GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes= new []{ "ProductManagementApi", "VendorManagementApi" }
                },
                new Client
                {
                    ClientId ="VendorManagmentApi",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    //AllowedScopes = new []{}
                   
                },
                 new Client
                {
                    ClientId ="VendorManagmentApp",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes = new []{ "ProductManagementApi", "VendorManagementApi" }
                   
                },
                  new Client
                {
                    ClientId = "UserManagementApp",
                    AllowedGrantTypes =  GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    AllowedScopes= new []{ "UserManagementApi" , "VendorManagementApi" }
                },

            };
        }
        public static IEnumerable<ApiResource> GetApiResources()
        {
            return new List<ApiResource>
            {
                new ApiResource("ProductManagementApi"),
                new ApiResource("VendorManagementApi"),
                new ApiResource("OrderManagementApi"),
            };
        }
        public static IEnumerable<IdentityResource> GetIdentityResources()
        {
            return new IdentityResource[]
            {
                new IdentityResources.OpenId(),
                new IdentityResources.Profile(),
            };
        }
    }
}