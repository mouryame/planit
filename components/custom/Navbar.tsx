import { FloatingNav } from "../ui/floating-navbar";
import { GoHome } from "react-icons/go";

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <GoHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "/about",
    //icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Contact",
    link: "/contact",
    /*icon: (
        <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),*/
  },
];

export default function Navbar() {
  return <FloatingNav navItems={navItems} />;
}
