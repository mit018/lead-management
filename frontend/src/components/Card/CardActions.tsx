import { Box, Button, Typography } from "@mui/material";
import { colors } from "../../theme/colors";
import { Lead } from "../../types/Lead";
import { formatMoney } from "../../utils/formatUtils";
import * as styles from "./LeadCard.styles";

const CardActions = ({
  lead,
  actions,
}: {
  lead: Lead;
  actions: {
    onAccept: () => void;
    onDecline: () => void;
  };
}) => {
  return (
    <Box sx={styles.actions}>
      <Button
        sx={{ backgroundColor: colors.primaryBtn }}
        variant="contained"
        onClick={() => actions.onAccept()}
      >
        Accept
      </Button>
      <Button
        sx={{ backgroundColor: colors.seccondaryBtn }}
        variant="contained"
        onClick={() => actions.onDecline()}
      >
        Decline
      </Button>
      <Typography fontSize={"16px"} lineHeight={1} marginLeft={"12px"}>
        <b>{formatMoney(lead.price)}</b> Lead Invitation
      </Typography>
    </Box>
  );
};

export default CardActions;
