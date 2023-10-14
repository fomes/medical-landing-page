import Image from "next/image";
import { ReactNode } from "react";
import pattern from "@/assets/img/newsletter/pattern.svg";

interface SectionNewsProps {
  children?: ReactNode;
}

export function SectionNews({ children }: SectionNewsProps) {
  return (
    <section className="newsletter bg-accent-default md:h-[444px] py-12 flex items-center relative overflow-hidden">
      <div className="absolute left-0 bottom-0">
        <Image src={pattern} alt="Background blue" />
      </div>

      <div className="newsletter__container container mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-[58px]">
          <div className="flex-1 z-10 text-center md:text-left">
            <div className="text-base uppercase text-white tracking-[2.24px] font-medium">
              Our Newsletter
            </div>
            <h1 className="h1 mb-4 text-white">
              Subscribe to get more updates
            </h1>
          </div>

          <form action="" className="flex-1">
            <div className="flex flex-col md:flex-row relative gap-y-4">
              <input
                type="text"
                placeholder="Your email address"
                className="rounded-full w-full h-[66px] bg-transparent border-2 border-white outline-none pl-[30px] placeholder:text-white focus:text-white"
              />
              <button className="btn btn-lg btn-white md:absolute right-0">
                Subscribe
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
