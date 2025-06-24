using Microsoft.EntityFrameworkCore;
using UserForm.Api.Data;

internal class Program
{
    private static void Main(string[] args)
    {
        var builder = WebApplication.CreateBuilder(args);

        // Add services to the container.
        builder.Services.AddControllers();

        // Swagger/OpenAPI
        builder.Services.AddEndpointsApiExplorer();
        builder.Services.AddSwaggerGen();

        // EF Core - Connect to SQL Server
        builder.Services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(builder.Configuration.GetConnectionString("UserDetailsConnectionString")));

        // ✅ CORS for React app running on localhost:3002
        builder.Services.AddCors(options =>
        {
            options.AddPolicy("AllowReactApp",
                policy => policy.WithOrigins("http://localhost:3001") // 👈 Update this
                                 .AllowAnyHeader()
                                 .AllowAnyMethod());
        });

        var app = builder.Build();

        // ✅ Enable the CORS policy
        app.UseCors("AllowReactApp");

        // Swagger config
        if (app.Environment.IsDevelopment())
        {
            app.UseSwagger();
            app.UseSwaggerUI();
        }

        app.UseHttpsRedirection();

        app.UseAuthorization();

        app.MapControllers();

        app.Run();
    }
}
