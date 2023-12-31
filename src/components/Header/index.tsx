import Image from "next/image";
import logo from "@/assets/img/header/logo.svg";
import { NavDesktop } from "../NavDesktop";
import { NavHiddenMenu } from "../NavHiddenMenu";

export function Header() {
  return (
    <header className="py-8 lg:pt-6 lg:pb-14">
      <div className="container mx-auto lg:relative flex flex-col lg:flex-row lg:justify-between gap-y-4 lg:gap-y-0">
        <div className="flex justify-center lg:justify-normal">
          <a href="#">
            <Image src={logo} alt="Logo" priority />
          </a>
        </div>

        <div className="flex flex-col gap-y-4 lg:flex-row lg:gap-x-10 lg:gap-y-0">
          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-map-pin-2-fill text-2xl text-accent-default"></i>
            <a
              className="text-secondary hover:text-accent-default transition-all duration-300"
              target="_blank"
              href={
                "https://www.google.com.br/maps/place/13+Allen+St,+New+York,+NY"
              }
            >
              13h Allen Street, NY
            </a>
          </div>

          <div className="flex justify-center items-center gap-x-2 lg:justify-normal">
            <i className="ri-phone-fill text-2xl text-accent-default"></i>
            <div className="text-secondary">(+487) 389 872</div>
          </div>

          <button className="btn btn-sm btn-outline w-[240px] lg:w-auto mx-auto lg:mx-0">
            Book now
          </button>

          <NavHiddenMenu />
          <NavDesktop />
        </div>
      </div>
    </header>
  );
}
