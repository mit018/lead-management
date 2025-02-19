import { Box, Typography } from "@mui/material";
import ErrorIcon from "../../assets/error.png";
import { colors } from "../../theme/colors";
import * as styles from "./Message.styles";

const ErrorMessage = () => {
  return (
    <Box sx={styles.container}>
      <img src={ErrorIcon} alt="No leads available" width={150} height={150} />
      <Typography
        fontSize={"30px"}
        fontWeight={700}
        fontFamily={"Roboto"}
        color={colors.cardBackground}
      >
        Something went wrong
      </Typography>
    </Box>
  );
};

export default ErrorMessage;
