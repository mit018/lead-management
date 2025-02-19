import { leadRepository } from "./leadRepository";
import { Lead, LeadStatus } from "../types/Lead";

export const leadService = {
  async getLeadsByStatus(status: LeadStatus): Promise<Lead[]> {
    return await leadRepository.fetchLeadsByStatus(status);
  },

  async acceptLead(id: number) {
    await leadRepository.acceptLead(id);
  },

  async declineLead(id: number): Promise<void> {
    await leadRepository.declineLead(id);
  },
};
