using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace api.Commands
{
    public class AcceptLeadCommand : IRequest<bool>
    {
        public int Id { get; set; }

        public AcceptLeadCommand(int id)
        {
            Id = id;
        }
    }
}
