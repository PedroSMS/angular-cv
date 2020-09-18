using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using webapi.Models;
using webapi.Services;

namespace webapi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EmailController : ControllerBase
    {
        [HttpPost]
        public async Task<IActionResult> Send([FromServices] IEmailService mailService, EmailRequest message)
        {
            try
            {
                await mailService.sendEmailAsync(message);
                return Ok(200);
            }
            catch(Exception ex)
            {
                return StatusCode(500);
            }
        }
    }
}