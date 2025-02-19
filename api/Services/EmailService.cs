using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace api.Services
{
    public class EmailService
    {
        private readonly string _logDirectory = "EmailLogs";

        public EmailService()
        {
            if (!Directory.Exists(_logDirectory))
                Directory.CreateDirectory(_logDirectory);
        }

        public async Task SendEmailAsync(string recipient, string subject, string body)
        {
            string filePath = Path.Combine(
                _logDirectory,
                $"email_{DateTime.UtcNow:yyyyMMdd_HHmmss}.txt"
            );

            string emailContent = $"To: {recipient}\nSubject: {subject}\n\n{body}";

            await File.WriteAllTextAsync(filePath, emailContent);
        }
    }
}
