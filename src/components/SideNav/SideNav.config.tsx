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
    key: "cloud",
    title: "Облачные серверы",
    href: "/",
    icon: <CloudOutlined />,
    active: true,
  },
  {
    key: "customers",
    title: "servers",
    href: "/",
    icon: <Dns />,
    disabled: true,
  },
  {
    key: "database",
    title: "Базы данных",
    href: "/",
    icon: <Storage />,
    disabled: true,
  },
  {
    key: "apps",
    title: "Apps",
    href: "/",
    icon: <Apps />,
    disabled: true,
  },
  {
    key: "s3",
    title: "Хранилище S3",
    href: "/",
    icon: <ViewInAr />,
    disabled: true,
  },
  {
    key: "kubernetes",
    title: "Kubernetes",
    href: "/",
    icon: <CloudCircle />,
    disabled: true,
  },
  {
    key: "network",
    title: "Сети",
    href: "/",
    icon: <Language />,
    disabled: true,
  },
  {
    key: "ssh",
    title: "SSH-ключи",
    href: "/",
    icon: <Key />,
    disabled: true,
  },
  {
    key: "iso",
    title: "Образы",
    href: "/",
    icon: <Album />,
    disabled: true,
  },
] satisfies NavItemConfig[];
