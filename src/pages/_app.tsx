import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Theme } from "react-daisyui";
import Navbar from "../components/Navbar";
import Dropdown from "../components/Dropdown";
import { IMAGE_URLS } from "../constants/ImageUrls";
import { useWindowSize, MOBILE_SIZE } from "../hooks/useWindowDimensions";
import { MdMenu } from "react-icons/md";
import { MenuItem } from "../components/types";

function AppNavbar() {
  const { width } = useWindowSize();
  const IsMobile = Number(width) < MOBILE_SIZE;

  const menuItems: MenuItem[] = [
    {
      label: "Home",
      href: "/",
      className: "text-white",
    },
    {
      label: "Getting Started",
      href: "/gettingstarted",
      className: "text-white text-small ",
    },
    {
      label: "Contact Me",
      href: "/contact",
      className: "text-white",
    },
    {
      label: "Telehealth",
      href: "/telehealth",
      className: "text-white",
    },
  ];

  return (
    <Navbar
      className={" fixed bg-default text-white top-0 z-50 "}
      iconUrl={IMAGE_URLS.icon}
      imageAlt={"Al Brown Therapy"}
      title={
        <span className="m-0 p-0  min-w-0 btn btn-ghost normal-case invisible w-0  md:w-auto md:visible text-sm md:text-lg lg:text-xl 2xl:text-2xl select-none px-2 ">
          {" "}
          A+ COUNSELING & CONSULTING, LLC
        </span>
      }
      suffix={
        <Dropdown menuItems={menuItems} className={" pr-1 sm:pr-3 md:pr-5 "}>
          {IsMobile ? <MdMenu /> : <span className="text-white text-lg ">More</span>}
        </Dropdown>
      }
    />
  );
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Theme dataTheme="dark">
      <div className="h-full min-h-full flex-1 select-none flex ">
        <AppNavbar />
        <Component {...pageProps} />
      </div>
    </Theme>
  );
}

export default MyApp;
