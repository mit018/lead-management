import { Box, CircularProgress } from "@mui/material";
import * as styles from "./Message.styles";
import { colors } from "../../theme/colors";

const Loading = () => {
  return (
    <Box sx={styles.container}>
      <CircularProgress sx={{ color: colors.cardBackground }} size={100} color="primary" />
    </Box>
  );
};

export default Loading;
