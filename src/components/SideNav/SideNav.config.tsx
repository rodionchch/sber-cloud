import {
  Dns,
  Key,
  Apps,
  Album,
  Storage,
  ViewInAr,
  Language,
  CloudCircle,
  CloudOutlined,
} from "@mui/icons-material";

import { NavItemConfig } from "./SideNav.types";

export const navItems = [
  {
    key: "overview",
    title: "Облачные серверы",
    href: "/",
    icon: <CloudOutlined />,
    active: true,
  },
  {
    key: "customers",
    title: "Выделенные серверы",
    href: "/",
    icon: <Dns />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Базы данных",
    href: "/",
    icon: <Storage />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Apps",
    href: "/",
    icon: <Apps />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Хранилище S3",
    href: "/",
    icon: <ViewInAr />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Kubernetes",
    href: "/",
    icon: <CloudCircle />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Сети",
    href: "/",
    icon: <Language />,
    disabled: true,
  },
  {
    key: "customers",
    title: "SSH-ключи",
    href: "/",
    icon: <Key />,
    disabled: true,
  },
  {
    key: "customers",
    title: "Образы",
    href: "/",
    icon: <Album />,
    disabled: true,
  },
] satisfies NavItemConfig[];
