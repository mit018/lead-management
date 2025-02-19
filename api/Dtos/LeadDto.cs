using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using api.Enums;

namespace api.Dtos.Lead
{
    public class LeadDto
    {
        public int id { get; set; }
        public string firstName { get; set; } = string.Empty;
        public string fullName { get; set; } = string.Empty;
        public string phone { get; set; } = string.Empty;
        public string email { get; set; } = string.Empty;
        public DateTime dateCreated { get; set; }
        public string suburb { get; set; } = string.Empty;
        public string category { get; set; } = string.Empty;
        public string description { get; set; } = string.Empty;
        public decimal price { get; set; }
        public LeadStatus status { get; set; }
    }
}
