export type IconNames = "Home" | "Build" | "Info" | "ContactMail";

export const MenuLinkItems: {
  title: string;
  url: string;
  cName: string;
  icon: IconNames;
}[] = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "Home",
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: "Build",
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "Info",
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "ContactMail",
  },
];
