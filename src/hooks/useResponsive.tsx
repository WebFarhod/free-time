/* eslint-disable react-hooks/rules-of-hooks */
import { Breakpoint, useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

export default function useResponsive(
  query?: string,
  start?: Breakpoint,
  end?: Breakpoint | number
) {
  const theme = useTheme();

  const mediaUp = start && useMediaQuery(theme.breakpoints.up(start));

  const mediaDown = start && useMediaQuery(theme.breakpoints.down(start));

  const mediaBetween =
    start && end && useMediaQuery(theme.breakpoints.between(start, end));

  const mediaOnly = start && useMediaQuery(theme.breakpoints.only(start));

  if (query === "up") {
    return mediaUp;
  }

  if (query === "down") {
    return mediaDown;
  }

  if (query === "between") {
    return mediaBetween;
  }

  return mediaOnly;
}
