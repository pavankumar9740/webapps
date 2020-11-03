using System.Reflection;
using IdentityServer4.EntityFramework.DbContexts;
using IdentityServer4.EntityFramework.Options;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Ntl.Tss.IdentityServer4.EFMigrations
{
    class PersistedGrantDbContextDesignTimeFactory : IDesignTimeDbContextFactory<PersistedGrantDbContext>
    {
        public PersistedGrantDbContext CreateDbContext(string[] args)
        {
            var migrationsAssembly = typeof(PersistedGrantDbContextDesignTimeFactory).GetTypeInfo().Assembly.GetName().Name;
            var optionsBuilder = new DbContextOptionsBuilder<PersistedGrantDbContext>();
            optionsBuilder.UseSqlServer("Server=tcp:ntl-authss.database.windows.net,1433;Initial Catalog=NtlAuthSS_db;Persist Security Info=False;User ID=ntladmin;Password=admin@564;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", sql => {
                sql.MigrationsAssembly(migrationsAssembly);
                sql.MigrationsHistoryTable("_PersistedGrantMigrations");
            });
            var operationalStoreOptions = new OperationalStoreOptions() { EnableTokenCleanup = true, TokenCleanupInterval = 30 };
        
            return new PersistedGrantDbContext(optionsBuilder.Options, operationalStoreOptions);
        }
    }
}
