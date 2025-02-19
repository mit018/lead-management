import { EmailOutlined, LocalPhoneOutlined } from "@mui/icons-material";
import { Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import { Lead } from "../../types/Lead";
import * as styles from "./LeadCard.styles";

const ContactInfo = ({ lead }: { lead: Lead }) => {
  return (
    <Grid container spacing={2} sx={styles.contact}>
      <Grid size={3} sx={styles.tag}>
        <LocalPhoneOutlined />
        <Typography fontSize={"16px"} lineHeight={1} fontWeight={600}>
          {lead.phone}
        </Typography>
      </Grid>
      <Grid size={8} sx={styles.tag}>
        <EmailOutlined />
        <Typography fontSize={"16px"} lineHeight={1} fontWeight={600}>
          {lead.email}
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ContactInfo;
