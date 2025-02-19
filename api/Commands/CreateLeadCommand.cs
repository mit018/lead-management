using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using api.Models;
using MediatR;

namespace api.Commands
{
    public class CreateLeadCommand : IRequest<LeadDto>
    {
        public Lead Lead { get; set; }

        public CreateLeadCommand(Lead lead)
        {
            Lead = lead;
        }
    }
}
