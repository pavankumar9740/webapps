using System.Collections.Generic;
using IdentityServer4;
using IdentityServer4.Models;

namespace Ntl.Tss.Web
{
    public static class Config
    {
        public static IEnumerable<Client> GetClients()
        {
            return new List<Client>
            {
                new Client
                {
                    ClientId = "ProductManagementApp",
                    AllowedGrantTypes =  GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    RequireConsent= false,
                    AllowAccessTokensViaBrowser= true,
                    AllowedScopes= new []{ "ProductManagementApi", "VendorManagementApi", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.Profile },
                    RedirectUris = new []{"https://localhost:8080/callback", "http://localhost:8080/callback", "http://localhost:8081/callback", "https://localhost:8081/callback" },
                    PostLogoutRedirectUris = new []{ "https://ntl-tssp-webapp.azurewebsites.net" }

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
                    RequireConsent= false,
                    AllowAccessTokensViaBrowser= true,
                    AllowedScopes= new []{ "ProductManagementApi", "VendorManagementApi", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.Profile },
                    RedirectUris = new []{"https://localhost:8080/callback", "http://localhost:8080/callback", "http://localhost:8081/callback", "https://localhost:8081/callback" },
                    PostLogoutRedirectUris = new []{ "https://ntl-tssp-webapp.azurewebsites.net" }
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
                    RequireConsent= false,
                    AllowAccessTokensViaBrowser= true,
                    AllowedScopes = new []{ "ProductManagementApi", "VendorManagementApi", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.Profile },
                    RedirectUris = new []{"https://localhost:8080/callback", "http://localhost:8080/callback", "http://localhost:8081/callback", "https://localhost:8081/callback" },
                    PostLogoutRedirectUris = new []{ "https://ntl-tssp-webapp.azurewebsites.net" }

                },
                new Client
                {
                    ClientId ="UserManagementApp",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    RequireConsent= false,
                    AllowAccessTokensViaBrowser= true,
                    AllowedScopes = new []{ "UserManagementApi", "ProductManagementApi", "VendorManagementApi", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.Profile },
                    RedirectUris = new []{"https://localhost:8080/callback", "http://localhost:8080/callback", "http://localhost:8081/callback", "https://localhost:8081/callback" },
                    PostLogoutRedirectUris = new []{ "https://ntl-tssp-webapp.azurewebsites.net" }

                },
                new Client
                {
                    ClientId ="OrderManagementApp",
                    AllowedGrantTypes = GrantTypes.Implicit,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    RequireConsent= false,
                    AllowAccessTokensViaBrowser= true,
                    AllowedScopes = new []{ "OrderManagementApi", "ProductManagementApi", "VendorManagementApi", IdentityServerConstants.StandardScopes.OpenId, IdentityServerConstants.StandardScopes.Profile },
                    RedirectUris = new []{"https://localhost:8080/callback", "http://localhost:8080/callback", "http://localhost:8081/callback", "https://localhost:8081/callback" },
                    PostLogoutRedirectUris = new []{ "https://ntl-tssp-webapp.azurewebsites.net" }

                },
                new Client
                {
                    ClientId ="VendorManagementApi",
                    AllowedGrantTypes = GrantTypes.ClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    RequireConsent= false,
                    AllowedScopes = new []{ "UserManagementApi" }
                },

                new Client
                {
                    ClientId ="DeliveryMobileApp",
                    AllowedGrantTypes = GrantTypes.ResourceOwnerPasswordAndClientCredentials,
                    ClientSecrets =
                    {
                        new Secret("secret".Sha256())
                    },
                    AccessTokenLifetime = 86400,
                    RequireConsent= false,
                    AllowOfflineAccess = true,                    
                    AllowedScopes = new []{ "OrderManagementApi", "UserManagementApi" }
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
                new ApiResource("UserManagementApi")
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