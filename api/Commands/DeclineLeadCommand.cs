using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using MediatR;

namespace api.Commands
{
    public class DeclineLeadCommand : IRequest<bool>
    {
        public int Id { get; set; }

        public DeclineLeadCommand(int id)
        {
            Id = id;
        }
    }
}
