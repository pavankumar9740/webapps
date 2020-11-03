using System.IO;
using System.Reflection;
using System.Security.Principal;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.DataProtection;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.Azure.Storage;
using Microsoft.Azure.Storage.Blob;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using Microsoft.Extensions.Hosting;
using Ntl.Tss.Identity.Data;
using Ntl.Tss.Web.Middlewares;
using Ntl.Tss.Web.Models;
using Utilities.NotificationHelper;

namespace Ntl.Tss.Web
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
            CloudStorageAccount = CloudStorageAccount.Parse(configuration.GetConnectionString("StorageAccount"));
        }

        public IConfiguration Configuration { get; }
        public CloudStorageAccount CloudStorageAccount { get; set; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            var migrationsAssembly = typeof(Startup).GetTypeInfo().Assembly.GetName().Name;

            services.AddCors();
            services.AddControllersWithViews().AddRazorRuntimeCompilation();
            // configure strongly typed settings objects

            services.AddHttpContextAccessor();
            services.AddTransient<IPrincipal>(
                provider => provider.GetService<IHttpContextAccessor>().HttpContext.User);

            services.AddDbContext<TssIdentityDbContext>(options =>
            {
                options.UseSqlServer(Configuration.GetConnectionString("IdentityDb"),
                    b => b.MigrationsHistoryTable("_Migrations"));
            });

            services.AddIdentity<User, Role>()
                .AddEntityFrameworkStores<TssIdentityDbContext>()
                .AddDefaultTokenProviders();

            services.AddIdentityServer()
                .AddAspNetIdentity<User>()
                .AddResourceOwnerValidator<ResourceOwnerPasswordValidator>()
                .AddDeveloperSigningCredential()
                .AddInMemoryApiResources(Config.GetApiResources())
                .AddInMemoryClients(Config.GetClients())
                .AddInMemoryIdentityResources(Config.GetIdentityResources())
                //.AddConfigurationStore(options =>
                //{
                //    options.ConfigureDbContext = builder =>
                //        builder.UseSqlServer(Configuration.GetConnectionString("AuthSSDb"), b =>
                //        {
                //            b.MigrationsHistoryTable("_ConfigurationMigrations");
                //            b.MigrationsAssembly(migrationsAssembly);
                //        });
                //})
                ////this adds the operational data from DB (codes, tokens, consents)
                //.AddOperationalStore(options =>
                //{
                //    options.ConfigureDbContext = builder =>
                //        builder.UseSqlServer(Configuration.GetConnectionString("AuthSSDb"), b =>
                //        {
                //            b.MigrationsHistoryTable("_PersistedGrantMigrations");
                //            b.MigrationsAssembly(migrationsAssembly);
                //        });

                //    // this enables automatic token cleanup. this is optional.
                //    options.EnableTokenCleanup = true;
                //    options.TokenCleanupInterval = 30;
                //})
                .AddProfileService<UserProfileService>();
            services.AddDataProtection().SetApplicationName("IdentityApp")
                .PersistKeysToAzureBlobStorage(CloudStorageAccount, Configuration["DataProtectionKeyBlobPath"])
                .ProtectKeysWithAzureKeyVault(Configuration["DataProtectionKeyProtectorVaultKey"], Configuration["AzureKeyVault:ClientId"], Configuration["AzureKeyVault:ClientSecret"]);
            services.AddScoped<INotificationHelper, NotificationHelper>();
            services.AddScoped<UserProfileService, UserProfileService>();
            
            var otpKey = new OtpKey() { Key = Configuration["OtpKey"] };
            services.AddSingleton<OtpKey>(otpKey);

            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "MFRegistration";
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "ProductManagement";
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "UserManagement";
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "VendorManagement";
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "OrderManagement";
            });
            services.AddSpaStaticFiles(configuration =>
            {
                configuration.RootPath = "Dashboard";
            });
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }

            app.UseProtectFolder(new ProtectFolderOptions() { Path = "/ProductManagement/" });
            app.UseProtectFolder(new ProtectFolderOptions() { Path = "/UserManagement/" });
            app.UseProtectFolder(new ProtectFolderOptions() { Path = "/VendorManagement/" });
            app.UseProtectFolder(new ProtectFolderOptions() { Path = "/OrderManagement/" });
            app.UseProtectFolder(new ProtectFolderOptions() { Path = "/Dashboard/" });

            app.UseStaticFiles(); // For the wwwroot folder.

            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                    Path.Combine(env.ContentRootPath, "ProductManagement")),
                RequestPath = "/ProductManagement",
            });
            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, "UserManagement")),
                RequestPath = "/UserManagement",
            });
            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, "VendorManagement")),
                RequestPath = "/VendorManagement",
            });

            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, "MFRegistration")),
                RequestPath = "/MFRegistration",
            });
            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, "OrderManagement")),
                RequestPath = "/OrderManagement",
            });

            app.UseFileServer(new FileServerOptions
            {
                FileProvider = new PhysicalFileProvider(
                   Path.Combine(env.ContentRootPath, "Dashboard")),
                RequestPath = "/Dashboard",
            });

            // app.UseSpaStaticFiles();


            app.UseRouting();

            app.UseCors(a => a.AllowAnyOrigin()
                              .AllowAnyMethod()
                              .AllowAnyHeader());
            app.UseIdentityServer();

            app.UseAuthentication();
            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllers();
                endpoints.MapControllerRoute(
                        name: "default",
                        pattern: "{controller=Manage}/{action=Index}");
            });
            app.Map("/ProductManagement", prodMgmt =>
            {
                prodMgmt.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "ProductManagement";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "ProductManagement"))
                    };

               });
            });
            app.Map("/UserManagement", userMgmt =>
            {
                userMgmt.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "UserManagement";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "UserManagement"))
                    };

                });
            });
            app.Map("/VendorManagement", vendorMgmt =>
            {
                vendorMgmt.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "VendorManagement";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "VendorManagement"))
                    };

                });
            });
            app.Map("/MFRegistration", mfReg =>
            {
                mfReg.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "MFRegistration";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "MFRegistration"))
                    };

                });
            });
            app.Map("/OrderManagement", orderMgmt =>
            {
                orderMgmt.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "OrderManagement";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "OrderManagement"))
                    };

                });
            });
            app.Map("/Dashboard", dash =>
            {
                dash.UseSpa(spa =>
                {
                    spa.Options.SourcePath = "Dashboard";
                    spa.Options.DefaultPageStaticFileOptions = new StaticFileOptions
                    {
                        FileProvider = new PhysicalFileProvider(Path.Combine(Directory.GetCurrentDirectory(), "Dashboard"))
                    };

                });
            });




        }
    }
}