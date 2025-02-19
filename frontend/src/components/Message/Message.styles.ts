import { SxProps } from "@mui/material";

export const container: SxProps = {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    gap: "12px",
    left: "50%",
    top: "50%",
    alignItems: "center",
    WebkitTransform: "translate(-50%, -50%)",
    transform: "translate(-50%, -50%)",

    fontSize: "32px",
    fontFamily: "Roboto",
    fontWeight: 700,
}