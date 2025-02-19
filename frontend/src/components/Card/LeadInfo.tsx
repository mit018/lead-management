import { PinDropOutlined, WorkOutlineOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Lead } from "../../types/Lead";
import { formatMoney } from "../../utils/formatUtils";
import * as styles from "./LeadCard.styles";

const LeadInfo = ({
  lead,
  isInvitedCard,
}: {
  lead: Lead;
  isInvitedCard: boolean;
}) => {
  return (
    <Grid container spacing={2} sx={styles.info}>
      <Grid size={3} sx={styles.tag}>
        <PinDropOutlined />
        <Typography fontSize={"16px"} lineHeight={1}>
          {lead.suburb}
        </Typography>
      </Grid>
      <Grid size={3} sx={styles.tag}>
        <WorkOutlineOutlined />
        <Typography fontSize={"16px"} lineHeight={1}>
          {lead.category}
        </Typography>
      </Grid>
      <Grid size={2} sx={styles.tag}>
        <Typography fontSize={"16px"} lineHeight={1}>
          <b>Job ID:</b> {lead.id}
        </Typography>
      </Grid>
      {!isInvitedCard && (
        <Grid size={4} sx={styles.tag}>
          <Typography fontSize={"16px"} lineHeight={1}>
            <b>{formatMoney(lead.price)}</b> Lead Invitation
          </Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default LeadInfo;
