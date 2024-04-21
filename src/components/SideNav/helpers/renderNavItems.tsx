import { Stack } from "@mui/material";
import { NavItemConfig } from "../SideNav.types";
import SideNavItem from "../SideNavItem";

const renderNavItems = ({
  items = [],
  pathname,
}: {
  items?: NavItemConfig[];
  pathname: string;
}) => {
  const children = items.reduce(
    (acc: React.ReactNode[], curr: NavItemConfig): React.ReactNode[] => {
      const { key, ...item } = curr;

      acc.push(<SideNavItem key={key} pathname={pathname} {...item} />);

      return acc;
    },
    []
  );

  return (
    <Stack
      component="ul"
      spacing={1}
      sx={{ listStyle: "none", m: 0, p: 0, width: "100%" }}
    >
      {children}
    </Stack>
  );
};

export default renderNavItems;
