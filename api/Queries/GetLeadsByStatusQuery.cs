using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using api.Enums;
using MediatR;

namespace api.Queries
{
    public class GetLeadsByStatusQuery : IRequest<IEnumerable<LeadDto>>
    {
        public LeadStatus Status { get; set; }

        public GetLeadsByStatusQuery(LeadStatus status)
        {
            Status = status;
        }
    }
}
