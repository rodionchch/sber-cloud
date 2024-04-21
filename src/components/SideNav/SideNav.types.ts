import { EmotionJSX } from "@emotion/react/types/jsx-namespace";

export interface NavItemConfig {
  key: string;
  title?: string;
  active?: boolean;
  disabled?: boolean;
  external?: boolean;
  label?: string;
  icon?: Element | EmotionJSX.Element;
  href?: string;
  items?: NavItemConfig[];
  matcher?: { type: "startsWith" | "equals"; href: string };
}
