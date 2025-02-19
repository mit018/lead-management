import { Box, Typography } from "@mui/material";
import NoContentIcon from "../../assets/no-content.png";
import { colors } from "../../theme/colors";
import * as styles from "./Message.styles";

interface INoContentMessageProps {
  tab: number;
}

const NoContentMessage = ({ tab }: INoContentMessageProps) => {
  const statusString = ["Invited", "Accepted"];
  return (
    <Box sx={styles.container}>
      <img
        src={NoContentIcon}
        alt="No leads available"
        width={150}
        height={150}
      />
      <Typography
        fontSize={"30px"}
        fontWeight={700}
        fontFamily={"Roboto"}
        color={colors.cardBackground}
      >
        No {statusString[tab]} Leads
      </Typography>
    </Box>
  );
};

export default NoContentMessage;
