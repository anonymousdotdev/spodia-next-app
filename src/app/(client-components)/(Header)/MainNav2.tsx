import React, { FC } from "react";
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import LangDropdown from "./LangDropdown";
import NotifyDropdown from "./NotifyDropdown";
import AvatarDropdown from "./AvatarDropdown";
import DropdownTravelers from "./DropdownTravelers";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import Link from "next/link";
import TemplatesDropdown from "./TemplatesDropdown";
import { Route } from "@/routers/types";
import SearchDropdown from "./SearchDropdown";
import { InformationCircleIcon, QuestionMarkCircleIcon } from "@heroicons/react/24/outline";
import Tooltip from "@/components/Tooltip/Tooltip";

export interface MainNav2Props {
  className?: string;
}

const MainNav2: FC<MainNav2Props> = ({ className = "" }) => {
  return (
    <div className={`MainNav2 relative z-10 ${className}`}>
      <div className="px-4 h-20 lg:container flex justify-between">
        <div className="hidden md:flex justify-start flex-1 space-x-3 sm:space-x-8 lg:space-x-10">
          <Logo className=" self-center" />
          <div className="hidden lg:block self-center h-10 border-l border-neutral-300 dark:border-neutral-500"></div>
          <div className="hidden lg:flex items-center space-x-5 ">
            {/* <DropdownTravelers /> */}
            <Link className="text-md " href={"/" as Route<string>}>Hotels</Link>
            <Link className="text-md" href={"##" as Route<string>}>Restaurants</Link>
            <Link className="text-md" href={"##" as Route<string>}>Event Venues</Link>
            <Link className="text-md" href={"##" as Route<string>}>Travel Packages</Link>
            <Link className="text-md bg-[#F58606] text-white py-2 px-4 rounded-full" href={"#" as Route<string>}>List Your Property</Link>

          </div>
        </div>

        <div className="self-center lg:hidden flex-[3] max-w-lg !mx-auto md:px-3">
          <HeroSearchForm2MobileFactory />
        </div>

        <div className="hidden md:flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden lg:flex space-x-1 items-center">
            {/* <TemplatesDropdown /> */}
            {/* <LangDropdown /> */}
            {/* Search Icon | Language | Account | FAQs | Help */}
            <SearchDropdown />
            <LangDropdown />

            {/* <NotifyDropdown /> */}
            <AvatarDropdown />
            <Tooltip text="FAQs">
              <QuestionMarkCircleIcon className="w-6 h-6 cursor-pointer" />
            </Tooltip>
            <Tooltip text="Help">
              <InformationCircleIcon className="w-6 h-6 cursor-pointer" />
            </Tooltip>
          </div>
          <div className="flex space-x-2 lg:hidden">
            {/* <NotifyDropdown /> */}
            <AvatarDropdown />
            <MenuBar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav2;
