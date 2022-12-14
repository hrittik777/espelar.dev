import * as React from "react";
import { useContext } from "react";
import { PageNameContext } from "../../context/page-name-context";

type HeroParagraphRegularProps = {
  text: string;
}

type HeroParagraphRegularClassName = {
  heroParagraphRegularClassName: string;
}

const HeroParagraphRegular = ({ text }: HeroParagraphRegularProps) => {
  const { pageName, setPageName } = useContext(PageNameContext);

  if (typeof window === "undefined") return null;
  const themeType = localStorage.getItem("theme");

  let classNames: HeroParagraphRegularClassName;

  if (themeType === "light" || !themeType) {
    if (pageName === "about") {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular-about"
      }
    } else {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular"
      }
    }
  } else {
    if (pageName === "about") {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular-about-dark"
      }
    } else {
      classNames = {
        heroParagraphRegularClassName: "hero-paragraph-regular"
      }
    }
  }

  return (
    <p className={classNames.heroParagraphRegularClassName}>{text}</p>
  )
}

export default HeroParagraphRegular;