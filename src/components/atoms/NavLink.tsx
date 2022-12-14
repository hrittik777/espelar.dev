import * as React from "react";
import { Link } from "gatsby";
import { linkPath, linkText } from "../../util";

type NavLinkProps = {
  text: string;
  type: "link" | "button";
  onClick?: any;
};

type NavLinkClassName = {
  navlinkLinkTextClassName: string;
  navlinkButtonTextClassName: string;
}

const NavLink = ({ type, text }: NavLinkProps) => {
  if (typeof window === "undefined") return null;
  const themeType = localStorage.getItem("theme");

  let classNames: NavLinkClassName;

  if (themeType === "light" || !themeType) {
    classNames = {
      navlinkLinkTextClassName: "navlink-link-text",
      navlinkButtonTextClassName: "navlink-button-text"
    }
  } else {
    classNames = {
      navlinkLinkTextClassName: "navlink-link-text-dark",
      navlinkButtonTextClassName: "navlink-button-text"
    }
  }

  return (
    type === "link" ?
      <div className={`navlink-${type}`}>
        <Link
          className={classNames.navlinkLinkTextClassName}
          to={linkPath(text)}>{linkText(text)}
        </Link>
      </div> :
      <button className={`navlink-${type}`}>
        <Link
          className={classNames.navlinkButtonTextClassName}
          to={linkPath(text)}>{linkText(text)}
        </Link>
      </button>
  );
}

export default NavLink;