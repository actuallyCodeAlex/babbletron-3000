import { Dispatch, SetStateAction } from "react";
import { NavOptions } from "../../types";

interface NavItemProps {
  activeNav: NavOptions;
  name: NavOptions;
  setActiveNav: Dispatch<SetStateAction<NavOptions>>;
}

export const NavItem = (props: NavItemProps) => {
  const { activeNav, name, setActiveNav } = props;

  const handleClick = () => setActiveNav(name);

  return (
    <a
      aria-controls={`v-pills-${name}`}
      aria-selected={activeNav === name ? "true" : "false"}
      className={`nav-link ${activeNav === name ? "active" : ""}`}
      data-bs-toggle="pill"
      href={`#v-pills-${name}`}
      id={`v-pills-${name}-tab`}
      onClick={handleClick}
      role="tab"
      tabIndex={activeNav === name ? 1 : -1}
    >
      {name}
    </a>
  );
};
