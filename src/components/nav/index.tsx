import { Dispatch, SetStateAction } from "react";
import { NavOptions } from "../../types";
import { NavItem } from "../nav-item";

interface NavProps {
  activeNav: NavOptions;
  setActiveNav: Dispatch<SetStateAction<NavOptions>>;
}

export const Nav = (props: NavProps) => {
  const { activeNav, setActiveNav } = props;

  return (
    <div className="col-3 bg-tertiary px-4" id="nav">
      <h1 className="mt-5 mb-5">babbletron-3000</h1>
      <div
        className="nav flex-column nav-pills mt-5"
        id="v-pills-tab"
        role="tablist"
        aria-orientation="vertical"
      >
        <NavItem
          activeNav={activeNav}
          name={NavOptions.Home}
          setActiveNav={setActiveNav}
        />
        <NavItem
          activeNav={activeNav}
          name={NavOptions.Repositories}
          setActiveNav={setActiveNav}
        />
        <NavItem
          activeNav={activeNav}
          name={NavOptions.Settings}
          setActiveNav={setActiveNav}
        />
      </div>
    </div>
  );
};
