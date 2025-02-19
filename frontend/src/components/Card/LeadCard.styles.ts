import { SxProps } from "@mui/material";
import { colors } from "../../theme/colors";

const flexRow: SxProps = {
  display: "flex",
  flexDirection: "row",
}

export const card: SxProps = {
  display: "flex",
  flexDirection: "column",
  boxShadow: "none",
  background: colors.cardBackground,
  color: colors.seccondaryText,
}

export const header: SxProps = {
  ...flexRow,
  padding: "16px",
  paddingBottom: "12px",
  gap: "16px",
  color: colors.primaryText,
}

export const info: SxProps = {
  padding: "12px 24px",
}

export const tag: SxProps = {
  ...flexRow,
  gap: "6px",
  alignItems: 'center',
  justifyContent: 'start',
  svg: {
    marginBottom: "2px"
  }
}

export const contact: SxProps = {
  padding: "12px 16px 0px 24px",
  color: colors.seccondaryBtn,
}

export const description: SxProps = {
  padding: "20px 16px 24px 24px",
}

export const actions: SxProps = {
  ...flexRow,
  gap: "12px",
  padding: "16px 16px",
  alignItems: "center"
}