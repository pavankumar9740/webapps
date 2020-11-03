using System.IO;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Hosting;

namespace Ntl.Tss.Web
{
    public class Program
    {
        public static void Main(string[] args)
        {
            CreateHostBuilder(args).Build().Run();
        }

        public static IHostBuilder CreateHostBuilder(string[] args) =>
            Host.CreateDefaultBuilder(args)
                .ConfigureAppConfiguration((context,config)=>{
                    var builtConfig = config.Build();
                    config.AddAzureKeyVault(builtConfig["AzureKeyVault:Url"], builtConfig["AzureKeyVault:ClientId"], builtConfig["AzureKeyVault:ClientSecret"]);
                })
            
                .ConfigureWebHostDefaults(webBuilder =>
                {
                    webBuilder.UseStartup<Startup>();
                });
    }
}
