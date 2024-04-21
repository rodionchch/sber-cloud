import Box from "@mui/material/Box";
import { navItems } from "./SideNav.config";
import renderNavItems from "./helpers/renderNavItems";
import { useTheme } from "@mui/material";

const SideNav = () => {
  const theme = useTheme();

  return (
    <Box
      component="nav"
      sx={{
        "--SideNav-background": "#191919",
        "--NavItem-active-background": theme?.palette?.primary?.main,
        "--NavItem-active-color": "#fff",
        "--NavItem-disabled-color": "#8d8d8d",
        bgcolor: "var(--SideNav-background)",
        borderRadius: 4,
        scrollbarWidth: "none",
        "&::-webkit-scrollbar": { display: "none" },
        flex: "1 1 auto",
        p: "12px",
        display: { xs: "none", lg: "flex" },
      }}
    >
      {renderNavItems({ pathname: "/", items: navItems })}
    </Box>
  );
};

export default SideNav;
