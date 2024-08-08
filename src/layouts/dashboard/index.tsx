import { ReactNode, useState } from "react";
import Header from "./header";
import Nav from "./nav";
import { Box } from "@mui/material";
import Main from "./main";
interface IProps {
  children: ReactNode;
}
export default function DashboardLayout({ children }: IProps) {
  const [openNav, setOpenNav] = useState<boolean>(false);

  return (
    <>
      <Header onOpenNav={() => setOpenNav(true)} />
      <Box
        sx={{
          minHeight: 1,
          display: "flex",
          flexDirection: { xs: "column", lg: "row" },
        }}
      >
        <Nav openNav={openNav} onCloseNav={() => setOpenNav(false)} />
        <Main>{children}</Main>
      </Box>
    </>
  );
}
