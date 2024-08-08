import {
  Avatar,
  Box,
  Drawer,
  ListItemButton,
  Stack,
  Typography,
  alpha,
  useTheme,
} from "@mui/material";
import { usePathname } from "../../routes/hooks/usePathname";
import useResponsive from "../../hooks/useResponsive";
import { useEffect } from "react";
import Scrollbar from "../../components/scrollbar/Scrollbar";
import { NAV } from "./config-layout";
import { tokens } from "../../theme";
// import useResponsive from "../../hooks/use-responsive";
// import { usePathname } from "../../routes/hooks/use-pathname";
// import { useEffect } from "react";
// import Scrollbar from "../../components/admin/scrollbar";
// import Logo from "../../components/admin/logo";
// import navConfig, { INavConfig } from "./config-navigation";
// import { RouterLink } from "../../routes/components";
// import { account } from "../../_mock/accoun";
import image from "../../assets/user.png";
import navConfig, { INavConfig } from "./config-navigation";
import RouterLink from "../../routes/components/router-link";
interface IProps {
  openNav: boolean;
  onCloseNav: () => void;
}
export default function Nav({ openNav, onCloseNav }: IProps) {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const pathname = usePathname();

  const upLg = useResponsive("up", "lg");

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const renderAccount = (
    <Box
      sx={{
        my: 3,
        mx: 2,
        py: 2,
        px: 2.5,
        display: "flex",
        borderRadius: 1.5,
        alignItems: "center",
        bgcolor: (theme) => alpha(theme.palette.grey[500], 0.12),
      }}
    >
      <Avatar src={image} alt="photoURL" />

      <Box sx={{ ml: 2 }}>
        <Typography variant="subtitle2">{"account.displayName"}</Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {"account.role"}
        </Typography>
      </Box>
    </Box>
  );

  const renderMenu = (
    <Stack component="nav" spacing={0.5} sx={{ px: 2 }}>
      {navConfig.map((item) => (
        <NavItem key={item.title} item={item} />
      ))}
    </Stack>
  );

  const renderContent = (
    <Scrollbar
      sx={{
        height: 1,
        "& .simplebar-content": {
          height: 1,
          display: "flex",
          flexDirection: "column",
        },
      }}
    >
      {/* <Logo sx={{ mt: 3, ml: 4 }} /> */}
      {renderAccount}
      {renderMenu}
      <Box sx={{ flexGrow: 1 }} />
      {/* {renderUpgrade} */}
    </Scrollbar>
  );

  return (
    <Box
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV.WIDTH },
      }}
    >
      {upLg ? (
        <Box
          sx={{
            height: 1,
            position: "fixed",
            bgcolor: `${colors.primary[400]} !important`,
            width: NAV.WIDTH,
            borderRight: (theme) => `dashed 1px ${theme.palette.divider}`,
          }}
        >
          {renderContent}
        </Box>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          PaperProps={{
            sx: {
              width: NAV.WIDTH,
              bgcolor: `${colors.primary[400]} !important`,
              backgroundImage: "none",
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}

function NavItem({ item }: INavConfig) {
  const pathname = usePathname();

  const active = item.path === pathname;

  return (
    <ListItemButton
      component={RouterLink}
      href={item.path}
      sx={{
        minHeight: 44,
        borderRadius: 0.75,
        typography: "body2",
        color: "text.secondary",
        textTransform: "capitalize",
        fontWeight: "fontWeightMedium",
        "&:hover": {
          bgcolor: alpha("#a4a9fc ", 0.08),
        },
        ...(active && {
          color: "#6870fa",
          fontWeight: "fontWeightSemiBold",
          bgcolor: alpha("#6870fa ", 0.08),
          "&:hover": {
            bgcolor: alpha("#868dfb", 0.16),
          },
        }),
      }}
    >
      <Box component="span" sx={{ width: 24, height: 24, mr: 2 }}>
        {item.icon}
      </Box>

      <Box component="span">{item.title} </Box>
    </ListItemButton>
  );
}
