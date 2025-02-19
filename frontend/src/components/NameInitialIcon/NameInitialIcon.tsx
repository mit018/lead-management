import { Box } from "@mui/material";
import * as styles from "./NameInitialIcon.styles";

interface INameInitialIconProps {
  name: string;
}

const NameInitialIcon = ({ name }: INameInitialIconProps) => {
  const colors = [
    "#76949F",
    "#91B6C3",
    "#B83A13",
    "#222929",
    "#3B4646",
  ];
  const getRandomColor = (name: string) => {
    const index = name.charCodeAt(0) % colors.length;
    return colors[index];
  };

  return (
    <Box sx={{ ...styles.icon, backgroundColor: getRandomColor(name) }}>
      {name.charAt(0).toUpperCase()}
    </Box>
  );
};

export default NameInitialIcon;
