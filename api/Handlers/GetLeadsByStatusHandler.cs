using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using api.Mappers;
using api.Queries;
using MediatR;
using Microsoft.EntityFrameworkCore;

namespace api.Handles
{
    public class GetLeadsByStatusHandler
        : IRequestHandler<GetLeadsByStatusQuery, IEnumerable<LeadDto>>
    {
        private readonly ApplicationDbContext _context;

        public GetLeadsByStatusHandler(ApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<LeadDto>> Handle(
            GetLeadsByStatusQuery request,
            CancellationToken cancellationToken
        )
        {
            var leads = await _context
                .Leads.Where(lead => lead.Status == request.Status)
                .ToListAsync();
            return leads.Select(LeadMapper.toLeadDto);
        }
    }
}
