import { TabPanel } from "@mui/lab";
import { Box } from "@mui/material";
import { useLeads } from "../../hooks/useLeads";
import { LeadStatus } from "../../types/Lead";
import LeadCard from "../Card/LeadCard";
import ErrorMessage from "../Message/ErrorMessage";
import Loading from "../Message/Loading";
import NoContentMessage from "../Message/NoContentMessage";
import * as styles from "./Tabs.styles";
import { sortLeadsByDate } from "../../utils/formatUtils";

interface ILeadTabProps {
  status: LeadStatus;
}

const LeadTab = ({ status }: ILeadTabProps) => {
  const { leads, isLoading, isError, acceptLead, declineLead } = useLeads(
    status
  );

  const sortedLeads = sortLeadsByDate(leads || []);

  return (
    <TabPanel sx={{ padding: "0px" }} value={status}>
      <Box sx={styles.cardContainer}>
        {isLoading && <Loading />}
        {isError && <ErrorMessage />}
        {!isLoading &&
          sortedLeads?.map((lead) => {
            return (
              <LeadCard
                key={lead.id}
                lead={lead}
                invitedCardActions={
                  status == LeadStatus.Accepted
                    ? undefined
                    : {
                        onAccept: () => acceptLead(lead.id),
                        onDecline: () => declineLead(lead.id),
                      }
                }
              />
            );
          })}
        {!isLoading && !isError && leads?.length == 0 && (
          <NoContentMessage tab={status} />
        )}
      </Box>
    </TabPanel>
  );
};

export default LeadTab;
