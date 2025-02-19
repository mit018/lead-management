using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using api.Mappers;
using api.Queries;
using MediatR;

namespace api.Handles
{
    public class GetLeadByIdHandler : IRequestHandler<GetLeadByIdQuery, LeadDto?>
    {
        private readonly ApplicationDbContext _context;

        public GetLeadByIdHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<LeadDto?> Handle(
            GetLeadByIdQuery request,
            CancellationToken cancellationToken
        )
        {
            var lead = await _context.Leads.FindAsync(request.Id);
            if (lead == null)
                throw new Exception($"Lead with ID {request.Id} not found.");

            return lead != null ? lead?.toLeadDto() : null;
        }
    }
}
