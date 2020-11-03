using System.Reflection;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace Ntl.Tss.Identity.Data
{
    internal class TssIdentityDbContextDesignTimeFactory:IDesignTimeDbContextFactory<TssIdentityDbContext>
    {
        public TssIdentityDbContext CreateDbContext(string[] args)
        {
            var migrationsAssembly = typeof(TssIdentityDbContextDesignTimeFactory).GetTypeInfo().Assembly.GetName().Name;
            var optionsBuilder = new DbContextOptionsBuilder<TssIdentityDbContext>();
            optionsBuilder.UseSqlServer(@"Server=tcp:authss.database.windows.net,1433;Initial Catalog=AuthSS_IdDb_dev;Persist Security Info=False;User ID=authss_admin;Password=Welcome1@;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;", sql => {
                sql.MigrationsAssembly(migrationsAssembly);
                sql.MigrationsHistoryTable("_Migrations");
            });
            return new TssIdentityDbContext(optionsBuilder.Options);
        }
    }
}
