using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Commands;
using api.Dtos.Lead;
using api.Mappers;
using MediatR;

namespace api.Handlers
{
    public class CreateLeadHandler : IRequestHandler<CreateLeadCommand, LeadDto>
    {
        private readonly ApplicationDbContext _context;

        public CreateLeadHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<LeadDto> Handle(
            CreateLeadCommand request,
            CancellationToken cancellationToken
        )
        {
            _context.Leads.Add(request.Lead);
            await _context.SaveChangesAsync();
            return request.Lead.toLeadDto();
        }
    }
}
