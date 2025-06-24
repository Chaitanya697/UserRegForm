using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using UserForm.Api.Data;
using UserForm.Api.Models.Domain;

namespace UserForm.Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly ApplicationDbContext applicationDbContext;    
    public UserController(ApplicationDbContext applicationDbContext)
        {
            this.applicationDbContext = applicationDbContext;
        }

        [HttpPost]
        public async Task<IActionResult> AddUser(UserDetails user)
        {
            applicationDbContext.userdetails.Add(user);
            await applicationDbContext.SaveChangesAsync();
            return Ok(user);
        }
    }
}