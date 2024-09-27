import type { MenuItem } from "@/layouts/default-layout/config/types";

const MainMenuConfig: Array<MenuItem> = [
  {
    pages: [
      {
        heading: "Home",
        route: "/home",
        keenthemesIcon: "element-11",
        bootstrapIcon: "bi-app-indicator",
      },
      {
        heading: "Tiket",
        route: "/tiket",
        keenthemesIcon: "switch",
        bootstrapIcon: "bi-layers",
      },
    ],
  },
];

export default MainMenuConfig;
