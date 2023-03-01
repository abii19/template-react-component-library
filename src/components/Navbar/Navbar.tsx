import React from "react";
import ZebecLink, { ZebecLinkProps } from "../ZebecLink";

interface NavbarProps {
  logo: string;
  network: string;
  routes: Array<ZebecLinkProps>;
  Profile: React.ElementType;
  Link: React.ElementType;
}

const Navbar: React.FC<NavbarProps> = (props) => {
  const { logo, network, routes, Profile, Link } = props;
  return (
    <>
      <nav className="flex justify-between items-center py-4 px-10">
        {/* Navbar Brand */}
        <div className="flex flex-col">
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
          <div className="pl-4">{network}</div>
        </div>
        {/* Routes */}
        <div className="flex items-center gap-x-4">
          {routes.map((route, index) => {
            return (
              <ZebecLink
                key={`${route.label}-${index}`}
                {...route}
                Link={Link}
              />
            );
          })}
        </div>
        {/* Profile */}
        <Profile />
      </nav>
    </>
  );
};

export default Navbar;
