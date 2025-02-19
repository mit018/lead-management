using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Dtos.Lead;
using api.Models;

namespace api.Mappers
{
    public static class LeadMapper
    {
        public static LeadDto toLeadDto(this Lead lead)
        {
            return new LeadDto
            {
                id = lead.Id,
                category = lead.Category,
                dateCreated = lead.DateCreated,
                description = lead.Description,
                email = lead.ContactEmail,
                firstName = lead.ContactFirstName,
                fullName = lead.ContactFirstName + " " + lead.ContactLastName,
                phone = lead.ContactPhoneNumber,
                price = lead.Price,
                status = lead.Status,
                suburb = lead.Suburb,
            };
        }
    }
}
