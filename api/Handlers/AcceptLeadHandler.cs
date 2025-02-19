using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Commands;
using api.Enums;
using api.Services;
using MediatR;

namespace api.Handlers
{
    public class AcceptLeadHandler : IRequestHandler<AcceptLeadCommand, bool>
    {
        private readonly ApplicationDbContext _context;
        private readonly EmailService _emailService;

        public AcceptLeadHandler(ApplicationDbContext context, EmailService emailService)
        {
            _context = context;
            _emailService = emailService;
        }

        public async Task<bool> Handle(
            AcceptLeadCommand request,
            CancellationToken cancellationToken
        )
        {
            var lead = await _context.Leads.FindAsync(request.Id);
            if (lead == null)
                return false;

            lead.Status = LeadStatus.Accepted;
            if (lead.Price > 500)
                lead.Price *= 0.9m;

            await _context.SaveChangesAsync();

            string emailBody =
                $"Lead {lead.Id} ({lead.ContactFirstName} {lead.ContactLastName}) was accepted!\n"
                + $"Category: {lead.Category}\n"
                + $"Description: {lead.Description}\n"
                + $"Final price: {lead.Price:C}";

            await _emailService.SendEmailAsync("vendas@test.com", "Accepted Lead", emailBody);

            return true;
        }
    }
}
