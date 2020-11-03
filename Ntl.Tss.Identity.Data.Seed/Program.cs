namespace Ntl.Tss.Identity.Data.Seed
{
    class Program
    {
        static void Main(string[] args)
        {
            var createUsers = new CreateUsers(@"Server=tcp:authss.database.windows.net,1433;Initial Catalog=AuthSS_IdDb;Persist Security Info=False;User ID=authss_admin;Password=Welcome1@;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            createUsers.CreateAdminUser();
        }
    }    
}
