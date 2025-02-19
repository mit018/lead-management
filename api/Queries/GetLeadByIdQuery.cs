using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using MediatR;

namespace api.Queries
{
    public class GetLeadByIdQuery : IRequest<LeadDto?>
    {
        public int Id { get; set; }

        public GetLeadByIdQuery(int id)
        {
            Id = id;
        }
    }
}
