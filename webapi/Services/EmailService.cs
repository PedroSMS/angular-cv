using System;
using System.Threading.Tasks;
using MailKit.Net.Smtp;
using Microsoft.Extensions.Options;
using MimeKit;
using MailKit.Security;
using webapi.Models;

namespace webapi.Services
{
    public class EmailService : IEmailService
    {
        private readonly EmailSettings _emailSettings;
        
        public EmailService(IOptions<EmailSettings> emailSettings)
        {
            _emailSettings = emailSettings.Value;
        }
        public async Task sendEmailAsync(EmailRequest emailRequest)
        {
            var email = new MimeMessage();
            email.Sender = MailboxAddress.Parse(_emailSettings.Email);
            email.To.Add(MailboxAddress.Parse("pedrosms@outlook.pt"));
            email.Subject = "Email enviado pelo CV online";

            var builder = new BodyBuilder();

            builder.HtmlBody = $"<p><strong>Nome:</strong> {emailRequest.Name}</p><p><strong>Email:</strong> {emailRequest.Email}<p><strong>Mensagem:</strong> {emailRequest.Text}</p>";

            email.Body = builder.ToMessageBody();

            using(var smtp = new SmtpClient())
            {
                smtp.Connect(_emailSettings.Host, int.Parse(_emailSettings.Port), SecureSocketOptions.StartTls);
                smtp.Authenticate(_emailSettings.Email, _emailSettings.Password);

                await smtp.SendAsync(email);

                smtp.Disconnect(true);
            }
        }
    }
}