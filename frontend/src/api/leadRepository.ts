import axios from "axios";
import { Lead, LeadStatus } from "../types/Lead";

const API_URL = import.meta.env.VITE_API_URL + "/lead";

const api = axios.create({
  baseURL: API_URL,
  headers: { "Content-Type": "application/json" },
});

export const leadRepository = {
  async fetchLeadsByStatus(status: LeadStatus): Promise<Lead[]> {
    const response = await api.get<Lead[]>(`/status/${status}`);
    return response.data;
  },

  async acceptLead(id: number): Promise<void> {
    await api.put(`/${id}/accept`);
  },

  async declineLead(id: number): Promise<void> {
    await api.put(`/${id}/decline`);
  },
};
