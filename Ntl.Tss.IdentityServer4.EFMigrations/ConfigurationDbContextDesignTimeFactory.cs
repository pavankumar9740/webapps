using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Ntl.Tss.IdentityServer4.EFMigrations
{
    internal class ConfigurationDbContextDesignTimeFactory : IDesignTimeDbContextFactory<ConfigurationDbContext>
    {
        public ConfigurationDbContext CreateDbContext(string[] args)
        {
            var migrationsAssembly = typeof(ConfigurationDbContextDesignTimeFactory).GetTypeInfo().Assembly.GetName().Name;
            var optionsBuilder = new DbContextOptionsBuilder<ConfigurationDbContext>();
            optionsBuilder.UseSqlServer("Server=tcp:ntl-authss.database.windows.net,1433;Initial Catalog=NtlAuthSS_db;Persist Security Info=False;User ID=ntladmin;Password=admin@564;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", sql => {
                sql.MigrationsAssembly(migrationsAssembly);
                sql.MigrationsHistoryTable("_ConfigurationMigrations");
            });
            return new ConfigurationDbContext(optionsBuilder.Options, new ConfigurationStoreOptions());
        }
    }
}
