export type IconNames = "Home" | "Build" | "Info" | "ContactMail";

export const MenuLinkItems: {
  title: string;
  url: string;
  cName: string;
  icon: IconNames;
  dataTestId: string;
}[] = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: "Home",
    dataTestId: "Home",
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: "Build",
    dataTestId: "Build",
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: "Info",
    dataTestId: "Info",
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: "ContactMail",
    dataTestId: "ContactMail",
  },
];
