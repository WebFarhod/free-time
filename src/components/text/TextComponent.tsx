import { Typography } from "@mui/material";
import { FC, ReactNode } from "react";

interface IProps {
  children: ReactNode;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline";
}
const TextComponent: FC<IProps> = ({ children, variant = "h5" }) => {
  return (
    <Typography variant={variant} color="secondary">
      {children}
    </Typography>
  );
};
export default TextComponent;
