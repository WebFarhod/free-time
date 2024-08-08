import {
  AppBar,
  Box,
  IconButton,
  Stack,
  Toolbar,
  useTheme,
} from "@mui/material";
import useResponsive from "../../hooks/useResponsive";
import Iconify from "../../components/iconify/iconify";
import { HEADER, NAV } from "./config-layout";
// import useResponsive from "../../hooks/use-responsive";

import { bgBlur } from "../../theme/css";

// import Iconify from "../../components/admin/iconify/iconify";
// // import Searchbar from "./common/searchbar";
// import LanguagePopover from "./common/language-popover";
// import AccountPopover from "./common/account-popover";
// import NotificationsPopover from "./common/notifications/notifications-popover";

interface IProps {
  onOpenNav: () => void;
}

export default function Header({ onOpenNav }: IProps) {
  const theme = useTheme();
  const lgUp = useResponsive("up", "lg");

  const Blur: object = {
    ...bgBlur({
      color: theme.palette.background.default,
    }),
  };

  const renderContent = (
    <>
      {!lgUp && (
        <IconButton onClick={onOpenNav} sx={{ mr: 1 }}>
          <Iconify icon="eva:menu-2-fill" />
        </IconButton>
      )}

      {/* <Searchbar /> */}

      <Box sx={{ flexGrow: 1 }} />

      <Stack direction="row" alignItems="center" spacing={1}>
        {/* <LanguagePopover /> */}
        {/* <MessagePopover /> */}
        {/* <NotificationsPopover /> */}
        {/* <AccountPopover /> */}
      </Stack>
    </>
  );

  return (
    <AppBar
      sx={{
        boxShadow: "none",
        height: HEADER.H_MOBILE,
        zIndex: theme.zIndex.appBar + 1,
        ...Blur,
        transition: theme.transitions.create(["height"], {
          duration: theme.transitions.duration.shorter,
        }),
        ...(lgUp && {
          width: `calc(100% - ${NAV.WIDTH + 1}px)`,
          height: HEADER.H_DESKTOP,
        }),
      }}
    >
      <Toolbar
        sx={{
          height: 1,
          px: { lg: 5 },
        }}
      >
        {renderContent}
      </Toolbar>
    </AppBar>
  );
}
