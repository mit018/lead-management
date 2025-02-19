import { SxProps } from "@mui/material";
import { colors } from "../../theme/colors";

export const tabsContainer: SxProps = {
    width: "65%",
    height: "80%",
    backgroundColor: colors.tabBackground,
    position: "absolute",
    left: "50%",
    top: "50%",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",
    boxShadow: "none",
}

export const tabs: SxProps = {
    boxShadow: "none",
    backgroundColor: colors.cardBackground,
    "& .MuiTabs-indicator": {
        backgroundColor: colors.seccondaryBtn
    },
    "& .MuiButtonBase-root": {
        textTransform: "none",
        color: colors.primaryText,
        fontSize: "18px",
        fontFamily: "Roboto",
        fontWeight: 500
    },
    "& .Mui-selected": {
        color: `${colors.seccondaryBtn} !important`,
        fontWeight: 700
    }
}

export const tabsContent: SxProps = { overflow: "auto", maxHeight: "calc(100% - 48px)" }