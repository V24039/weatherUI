import { Grid, TableCell, TextField, styled } from "@mui/material";

export const StyledTextField = styled(TextField)(({ theme, style }) => ({
  "& .MuiOutlinedInput-root": {
    borderRadius: 35,
    color: "#1A2027",
    position: "relative",
    backgroundColor: "#F3F6F9",
    border: style?.border || "5px solid",
    width: "auto",
  },
}));

export const StyledItem = styled(Grid)(({ theme }) => ({
  color: "black",
  height: "100%",
  background: "rgba(255, 255, 255, 0.5)",
  backdropFilter: "blur(8px)",
  borderRadius: "20px",
  border: "1px solid rgba(255, 255, 255, 0.99)",
}));

export const StyledTableCell = styled(TableCell)(({ theme }) => ({
  padding: "10px",
  textAlign: "left",
  fontSize: "20px"
}));
