using Microsoft.EntityFrameworkCore;
using UserForm.Api.Models.Domain;

namespace UserForm.Api.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {
        }
        public DbSet<UserDetails> userdetails { get; set; }
    }
 
}

