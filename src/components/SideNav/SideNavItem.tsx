import { Box, Typography } from "@mui/material";

import { NavItemConfig } from "./SideNav.types";

interface NavItemProps extends Omit<NavItemConfig, "items"> {
  pathname: string;
}

const SideNavItem = ({
  active,
  disabled,
  external,
  href,
  icon,
  title,
}: NavItemProps) => {
  return (
    <li>
      <Box
        {...(href
          ? {
              component: "a",
              href,
              target: external ? "_blank" : undefined,
              rel: external ? "noreferrer" : undefined,
            }
          : { role: "button" })}
        sx={{
          alignItems: "center",
          borderRadius: 1,
          cursor: "pointer",
          display: "flex",
          flex: "0 0 auto",
          gap: 1,
          p: "6px 16px",
          position: "relative",
          textDecoration: "none",
          whiteSpace: "nowrap",
          ...(disabled && {
            color: "var(--NavItem-disabled-color)",
            cursor: "not-allowed",
          }),
          ...(active && {
            color: "var(--NavItem-active-color)",
            bgcolor: "var(--NavItem-active-background)",
          }),
        }}
        onClick={(e) => {
          if (disabled) {
            e.preventDefault();
          }
        }}
      >
        <Box
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            flex: "0 0 auto",
          }}
        >
          <>{icon}</>
        </Box>
        <Box sx={{ flex: "1 1 auto" }}>
          <Typography
            component="span"
            sx={{
              color: "inherit",
              fontSize: "0.875rem",
              fontWeight: 500,
              lineHeight: "28px",
            }}
          >
            {title}
          </Typography>
        </Box>
      </Box>
    </li>
  );
};

export default SideNavItem;
