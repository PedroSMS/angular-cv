using System.Threading.Tasks;
using webapi.Models;

namespace webapi.Services
{
    public interface IEmailService
    {
        Task sendEmailAsync(EmailRequest emailRequest);
    }
}