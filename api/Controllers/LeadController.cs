using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Commands;
using api.Dtos.Lead;
using api.Enums;
using api.Mappers;
using api.Models;
using api.Queries;
using api.Services;
using MediatR;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace api.Controllers
{
    [Route("api/lead")]
    [ApiController]
    public class LeadController : ControllerBase
    {
        private readonly IMediator _mediator;

        public LeadController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet("status/{status}")]
        public async Task<ActionResult<IEnumerable<LeadDto>>> GetAllByStatus(LeadStatus status)
        {
            var leads = await _mediator.Send(new GetLeadsByStatusQuery(status));
            return Ok(leads);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LeadDto>> GetLeadById(int id)
        {
            var lead = await _mediator.Send(new GetLeadByIdQuery(id));
            return Ok(lead);
        }

        [HttpPost]
        public async Task<ActionResult<LeadDto>> CreateLead(Lead lead)
        {
            var createdLead = await _mediator.Send(new CreateLeadCommand(lead));
            return CreatedAtAction(nameof(GetLeadById), new { id = createdLead.id }, createdLead);
        }

        [HttpPut("{id}/accept")]
        public async Task<IActionResult> AcceptLead(int id)
        {
            if (!await _mediator.Send(new AcceptLeadCommand(id)))
                return NotFound();

            return NoContent();
        }

        [HttpPut("{id}/decline")]
        public async Task<IActionResult> DeclineLead(int id)
        {
            if (!await _mediator.Send(new DeclineLeadCommand(id)))
                return NotFound();

            return NoContent();
        }
    }
}
