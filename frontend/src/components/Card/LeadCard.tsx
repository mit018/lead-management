import "@fontsource/roboto/index.css";
import { Box, Divider, Paper, Typography } from "@mui/material";
import { Lead } from "../../types/Lead";
import CardActions from "./CardActions";
import CardHeader from "./CardHeader";
import ContactInfo from "./ContactInfo";
import * as styles from "./LeadCard.styles";
import LeadInfo from "./LeadInfo";

export interface ILeadCardBaseProps {
  lead: Lead;
}

interface ILeadCardProps extends ILeadCardBaseProps {
  invitedCardActions?: {
    onAccept: () => void;
    onDecline: () => void;
  };
}

const LeadCard = ({ lead, invitedCardActions }: ILeadCardProps) => {
  const isInvitedCard = invitedCardActions !== undefined;
  return (
    <Paper sx={styles.card}>
      <CardHeader lead={lead} />

      <Divider />
      <LeadInfo lead={lead} isInvitedCard={isInvitedCard} />

      {!isInvitedCard && (
        <>
          <Divider />
          <ContactInfo lead={lead} />
        </>
      )}

      <Box sx={styles.description}>
        <Typography fontSize={"16px"} lineHeight={"18px"}>
          {lead.description}
        </Typography>
      </Box>

      {isInvitedCard && (
        <>
          <Divider />
          <CardActions actions={invitedCardActions} lead={lead} />
        </>
      )}
    </Paper>
  );
};

export default LeadCard;
