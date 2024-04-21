export interface NavItemConfig {
  key: string;
  title?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?: any;
  href?: string;
  items?: NavItemConfig[];
  matcher?: { type: "startsWith" | "equals"; href: string };
}
