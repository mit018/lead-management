import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { leadService } from "../api/leadService";
import { LeadStatus } from "../types/Lead";

export const useLeads = (status: LeadStatus) => {
  const queryClient = useQueryClient();

  const { data: leads, isLoading, isError } = useQuery({
    queryKey: ["leads", status],
    queryFn: () => leadService.getLeadsByStatus(status),
    staleTime: 1000 * 60 * 5,
  });

  const acceptLeadMutation = useMutation({
    mutationFn: (id: number) => leadService.acceptLead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads", LeadStatus.Accepted] });
      queryClient.invalidateQueries({ queryKey: ["leads", LeadStatus.Invited] });
    },
  });

  const declineLeadMutation = useMutation({
    mutationFn: (id: number) => leadService.declineLead(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["leads", LeadStatus.Accepted] });
      queryClient.invalidateQueries({ queryKey: ["leads", LeadStatus.Invited] });
    },
  });

  return {
    leads,
    isLoading,
    isError,
    acceptLead: acceptLeadMutation.mutate,
    declineLead: declineLeadMutation.mutate,
  };
};
