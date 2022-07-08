import type { NextPage } from "next";
import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import { IMAGE_URLS } from "../constants/ImageUrls";
import { MdNotStarted } from "react-icons/md";
import type { ReactElement } from "react";
import useChangeColorOnOverlap from "../hooks/useChangeColorOnOverlap";
import ReactElement from "react";
import { useWindowSize } from "../hooks/useWindowDimensions";

function BannerSection(): ReactElement {
  const QuoteRef = useRef(null);

  useChangeColorOnOverlap("bg-default", "bg-[#343a41]", QuoteRef, "app-navbar");

  function HandleClickGetStarted() {
    const MenuSectionElement = document.getElementById("menu-section");

    if (!MenuSectionElement) {
      return;
    }

    MenuSectionElement.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <div
      className="hero h-full flex-1 min-h-full bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${IMAGE_URLS["background-1"]})`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md" ref={QuoteRef}>
          <h1 className=" text-white mb-5 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
            We know what we are but not what we may be
          </h1>
          <p className="mb-5"> - Ophellia in Hamlet </p>
          <button className="btn btn-primary" onClick={HandleClickGetStarted}>
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

function MenuSection(): ReactElement {
  const SectionRef = useRef(null);
  useChangeColorOnOverlap("bg-default", "bg-[#343a40]", SectionRef, "app-navbar");

  const SectionTitle = `Let's talk therapy and counseling`;
  const SectionDescription = `A+ Counseling's mission is to create a space in which those affected by mental health concerns, trauma, or other challenging life circumstances can find safety, hope, peace, and joy.
  `;

  const MenuSectionLinks = [
    {
      text: "About Us",
      paragraph: `Paperwork to preferably filled out before our first meeting.`,
      href: "#section-1",
    },
    {
      text: "Contact Me",
      paragraph: `Simply shoot me a phone call or send me an email by filling out this form.`,
      href: "#section-2",
    },
    {
      text: "Teletherapy",
      paragraph: `About this new form of therapy.`,
      href: "#section-2",
    },
    {
      text: "What To Expect",
      paragraph: `New methods and events to expect.`,
      href: "#section-2",
    },
    {
      text: "Rates & Fees",
      paragraph: `Currently not accepting insurance. But, will be in the future.`,
      href: "#section-2",
    },
    {
      text: "Why us",
      paragraph: `Why you should choose us for your next therapy session.`,
      href: "#section-2",
    },
    {
      text: "FAQs",
      paragraph: `Some commonly asked questions that may help you through this process.`,
      href: "#section-2",
    },
    {
      text: "Exercise",
      paragraph: `Why exercise and overall well-being is an integral part to mental health.`,
      href: "#section-2",
    },
  ];

  return (
    <>
      <div
        id="menu-section"
        className=" p-5 flex flex-col  flex-1 bg-[#343a40] "
        ref={SectionRef}
      >
        <div className="h-50 p-2 mb-10 pt-28 lg:pt-52 flex items-center justify-center">
          <h1 className=" duration-75 text-center text-2xl sm:text-xl md:text-3xl lg:text-5xl font-bold text-white ">
            {SectionTitle}
          </h1>
        </div>
        <div className="h-40 pb-24 flex items-center justify-center">
          <p className="text-neutral-content text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-lg px-6 ">
            {SectionDescription}
          </p>
        </div>
        <div className=" flex-1 p-2 px-2 lg:px-10  flex flex-wrap justify-center  items-center lg:flex-row lg:flex-wrap sm:justify-evenly gap-2 pb-28 ">
          {MenuSectionLinks.map((link, index) => (
            <MenuSectionLink key={index} {...link} />
          ))}
        </div>
      </div>
    </>
  );
}

interface MenuSectionLinkProps {
  text: string;
  paragraph: string;
  href: string;
}

function MenuSectionLink({ icon, text, paragraph, href }: MenuSectionLinkProps): ReactElement {
  return (
    <div className="card card-compact mt-5 mx-2 lg:w-1/5 sm:w-1/3 w-full  bg-base-100 shadow-xl h-48 xl:h-60 duration-150   ">
      <div className="card-body">
        <h2 className="card-title text-white">{text}</h2>
        <p className="text-white">{paragraph} </p>
        <div className="card-actions justify-end">
          <Link href={href}>
            <button className="btn btn-primary">See more</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

function ConvienceSection(): ReactElement {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  const SectionRef = useRef(null);

  useChangeColorOnOverlap("bg-default", "bg-black", SectionRef, "app-navbar");

  return (
    <>
      <div
        className="flex flex-1 flex-col py-10 px-2 md:px-6 lg:px-12 xl:px-20 bg-white "
        ref={SectionRef}
      >
        <h1 className="text-black my-20 text-4xl text-center  ">
          Whatever is conveient for you, we can help you with.
        </h1>

        <div className="flex flex-col w-full lg:flex-row duration-100 scroll-smooth">
          <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
            content
          </div>
          <div className="divider lg:divider-horizontal">OR</div>
          <div className="grid flex-grow h-48 card bg-base-300 rounded-box place-items-center">
            content
          </div>
        </div>
      </div>
    </>
  );
}

function Home(): NextPage {
  return (
    <div className="h-screen w-full flex flex-col select-none ">
      <Head>
        <title>A+ COUNSELING & CONSULTING, LLC</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <BannerSection />
      <MenuSection />
      <ConvienceSection />
      <BannerSection />
    </div>
  );
}

export default Home;
