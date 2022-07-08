/* eslint-disable react-hooks/exhaustive-deps */
import type { ReactNode, ReactElement } from "react";
import { useMemo } from "react";
import Image from "next/image";
import { useWindowSize, MOBILE_SIZE } from "../../hooks/useWindowDimensions";
import { Size } from "../types";
import AppDrawer from "../AppDrawer";
import ViewElement from "../ViewElement/ViewElement";
import { useRouter } from "next/router";

function Navbar({ className, iconUrl, title, suffix, imageAlt }: NavbarProps): ReactElement {
  const router = useRouter();

  function HandleClickTitle() {
    // If on homepage, then go to the top of the page
    if (router.pathname == "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    // Go to home page
    router.push("/");
  }

  const { width } = useWindowSize();
  const IsMobile = Number(width) < MOBILE_SIZE;

  return (
    <>
      <div className={`navbar duration-150 ${className}`} id="app-navbar">
        <div className="navbar-start">
          <div
            className="min-w-0 p-0 md:p-1 m-0 flex items-center justify-start md:justify-center flex-row gap-2  "
            onClick={HandleClickTitle}
          >
            {title}
            <NavbarIcon iconUrl={iconUrl} imageAlt={imageAlt} />
          </div>
        </div>
        <div className="navbar-center"></div>
        <NavbarSuffix isMobile={IsMobile} suffix={suffix} />
      </div>
    </>
  );
}

Navbar.defaultProps = {
  className: "",
};

export default Navbar;

interface NavbarProps {
  className?: string;
  title?: ReactNode | string;
  iconUrl?: string;
  suffix?: ReactNode | string;
  imageAlt?: string;
}

function NavbarSuffix({ isMobile, suffix }: NavbarSuffixProps): ReactElement {
  function HandleArrowDownIcon() {
    return isMobile ? "menu menu-horizontal" : "";
  }

  return (
    <div className="navbar-end mr-10 ">
      <ul className={`menu menu-horizontal ${HandleArrowDownIcon()} p-0 `}>{suffix}</ul>
    </div>
  );
}

interface NavbarSuffixProps {
  isMobile: boolean;
  suffix: ReactNode | string;
}

function NavbarIcon({ iconUrl, imageAlt }: NavbarIconProps): ReactElement {
  const { width } = useWindowSize();
  const IsMobile = Number(width) < MOBILE_SIZE;

  const MobileSize: Size = {
    width: 150,
    height: 60,
  };

  const DesktopSize: Size = {
    width: 160,
    height: 80,
  };

  function ChangeImageSize() {
    if (IsMobile) {
      return MobileSize;
    }
    return DesktopSize;
  }

  const IconSize: Size = useMemo(ChangeImageSize, [DesktopSize, IsMobile, MobileSize]);

  return (
    <Image
      className="navbar-icon w-full "
      src={String(iconUrl)}
      alt={String(imageAlt)}
      width={IconSize.width}
      height={IconSize.height}
    />
  );
}

interface NavbarIconProps {
  iconUrl?: string;
  imageAlt?: string;
}
