import { useTheme } from "@mui/material";
import { FC, ReactNode } from "react";
import { Link } from "react-router-dom";

interface IProps {
  link: string;
  children: ReactNode;
}
const LinkComponent: FC<IProps> = ({ link, children }) => {
  const theme = useTheme();
  const color = theme.palette.secondary.main;

  return (
    <Link
      to={link}
      style={{ textDecorationColor: color }}
    >
      {children}
    </Link>
  );
};
export default LinkComponent;
