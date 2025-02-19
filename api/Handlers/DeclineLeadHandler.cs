using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Commands;
using api.Enums;
using MediatR;

namespace api.Handlers
{
    public class DeclineLeadHandler : IRequestHandler<DeclineLeadCommand, bool>
    {
        private readonly ApplicationDbContext _context;

        public DeclineLeadHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<bool> Handle(
            DeclineLeadCommand request,
            CancellationToken cancellationToken
        )
        {
            var lead = await _context.Leads.FindAsync(request.Id);
            if (lead == null)
                return false;

            lead.Status = LeadStatus.Declined;
            await _context.SaveChangesAsync();
            return true;
        }
    }
}
