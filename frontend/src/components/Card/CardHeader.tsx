import { Box, Typography } from "@mui/material";
import { Lead } from "../../types/Lead";
import { formatDate } from "../../utils/formatUtils";
import NameInitialIcon from "../NameInitialIcon/NameInitialIcon";
import * as styles from "./LeadCard.styles";

const CardHeader = ({ lead }: { lead: Lead }) => {
  return (
    <Box sx={styles.header}>
      <NameInitialIcon name={lead.firstName} />
      <Box sx={{ alignContent: "center" }}>
        <Typography fontSize={"18px"} fontWeight={600}>
          {lead.firstName}
        </Typography>
        <Typography fontSize={"14px"} lineHeight={1}>
          {formatDate(lead.dateCreated)}
        </Typography>
      </Box>
    </Box>
  );
};

export default CardHeader;
