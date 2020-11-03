using System.Linq;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Mappers;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;

namespace Ntl.Tss.IdentityServer4.Seed
{
    class Program
    {
        static void Main(string[] args)
        {
            var sqlServerConnectionString = "Server=tcp:ntl-kft.database.windows.net,1433;Initial Catalog=Ntl-AuthSSDb;Persist Security Info=False;User ID=ntl-admin;Password=Welcome1@;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;";

            var persitantGrantOptionsBuilder = new DbContextOptionsBuilder<PersistedGrantDbContext>();
            persitantGrantOptionsBuilder.UseSqlServer(sqlServerConnectionString, sql => {
                sql.MigrationsHistoryTable("_PersistedGrantMigrations");
            });
            var operationalStoreOptions = new OperationalStoreOptions() { EnableTokenCleanup = true, TokenCleanupInterval = 30 };

            using (var persitantGrantDbContext = new PersistedGrantDbContext(persitantGrantOptionsBuilder.Options, operationalStoreOptions))
            {
                //persitantGrantDbContext.Database.Migrate();//No use of this currently as migrations are in different assembly
            }

            var configurationOptionsBuilder = new DbContextOptionsBuilder<ConfigurationDbContext>();
            configurationOptionsBuilder.UseSqlServer(sqlServerConnectionString, sql => {
                sql.MigrationsHistoryTable("_ConfigurationMigrations");
            });

            using (var configurationDbContext = new ConfigurationDbContext(configurationOptionsBuilder.Options, new ConfigurationStoreOptions()))
            {
                //configurationDbContext.Database.Migrate(); //No use of this currently as migrations are in different assembly
                if (!configurationDbContext.Clients.Any())
                {
                    foreach (var client in Config.GetClients())
                    {
                        configurationDbContext.Clients.Add(client.ToEntity());
                    }
                    configurationDbContext.SaveChanges();
                }

                if (!configurationDbContext.ApiResources.Any())
                {
                    foreach (var resource in Config.GetApiResources())
                    {
                        configurationDbContext.ApiResources.Add(resource.ToEntity());
                    }
                    configurationDbContext.SaveChanges();
                }

                if (!configurationDbContext.IdentityResources.Any())
                {
                    foreach (var resource in Config.GetIdentityResources())
                    {
                        configurationDbContext.IdentityResources.Add(resource.ToEntity());
                    }
                    configurationDbContext.SaveChanges();
                }
            }
        }
    }
}
