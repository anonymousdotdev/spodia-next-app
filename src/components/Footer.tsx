"use client";

import Logo from "@/shared/Logo";
import SocialsList1 from "@/shared/SocialsList1";
import { CustomLink } from "@/data/types";
import React, { useEffect } from "react";
import FooterNav from "./FooterNav";
import brandLogo from "@/images/logos/logo.svg";
import { useFooterData } from "@/hooks/useHotels";
import Link from "next/link";
import { Route } from "next";
export interface WidgetFooterMenu {
  id: string;
  title: string;
  menus: CustomLink[];
}
// Column 1: About Us | Careers | Contact
// Column 2: Top Cities (Mumbai | Bengaluru | Chennai)
// Column 3: Help Center | Cancellation Policy
// Column 4: List Your Property | Travel Agents
const widgetMenus: WidgetFooterMenu[] = [
  {
    id: "5",
    title: "About Us",
    menus: [
      { href: "#", label: "About Us" },
      { href: "#", label: "Career" },
      { href: "#", label: "Contact" },
    ],
  },
  {
    id: "1",
    title: "Top Cities",
    menus: [
      { href: "#", label: "Mumbai" },
      { href: "#", label: "Bengaluru" },
      { href: "#", label: "Chennai" },
      { href: "#", label: "Delhi" },
    ],
  },
  {
    id: "2",
    title: "Help Center",
    menus: [
      { href: "#", label: "FAQs" },
      { href: "#", label: "Cancellation Policy" },
      { href: "#", label: "Terms & Conditions" },
      { href: "#", label: "Privacy Policy" },
    ],
  },
  {
    id: "4",
    title: "List Your Property",
    menus: [
      { href: '#', label: "List Your Property" },
      { href: "#", label: "Travel Agents" },
    ],
  },
];
const transformedData = [
  {
    title: "Company",
    items: ["About Us", "Careers", "Blog", "Press"],
  },
  {
    title: "Support",
    items: ["Help Center", "Contact Us", "FAQs"],
  },
  {
    title: "Legal",
    items: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  },
  {
    title: "Products",
    items: ["Hotels", "Restaurants", "Flights", "Car Rentals"],
  },
  {
    title: "Connect",
    items: ["Facebook", "Twitter", "Instagram", "LinkedIn"],
  },
];

const Footer: React.FC = () => {
  const { data, isError, isLoading } = useFooterData();
  console.log("Footer data ", data?.data);
  const [footerData, setFooterData] = React.useState<any>([]);

  useEffect(() => {
    let ffData = transformData(data?.data);
    console.log("ffData", ffData);
    setFooterData(ffData);
  }, [data])
  function transformData(data: any) {

    const transformedData = [];

    for (const key in data) {
      if (data[key].length > 0) {
        // Convert key name into a more readable title
        const title = key
          .replace(/_/g, ' ') // Replace underscores with spaces
          .replace(/\b(\w)/g, (match) => match.toUpperCase()).replace("Records", "Hotels");; // Capitalize each word
        transformedData.push({
          title,
          items: data[key]
        });
      }
    }

    return transformedData;

  }

  console.log("Footer ------- ", footerData);





  const renderWidgetMenuItem = (menu: WidgetFooterMenu, index: number) => {
    return (
      <div key={index} className="text-sm">
        <h2 className="text-lg font-semibold mb-2">
          {menu.title}
        </h2>
        <ul className="mt-5 space-y-4">
          {menu.menus.map((item, index) => (
            <li key={index}>
              <Link
                key={index}
                className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                href={item.href as Route<string>}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <>
      <FooterNav />

      <div className="nc-Footer relative py-20 lg:py-12 border-t border-neutral-200 dark:border-neutral-700">
        <div className="container grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-5 lg:grid-cols-5 lg:gap-x-10">
          <div className="flex flex-col col-span-2 md:col-span-4 lg:col-span-1 space-y-5">
            <div className="flex justify-center lg:justify-start">
              <img
                className="block max-h-36 sm:max-h-40 md:max-h-44 lg:max-h-48 w-auto"
                src={brandLogo.src}
                alt="Logo"
              />
            </div>
            <div className="text-justify lg:text-left">
              <p>
                Welcome to Spodia – where travel meets impact. More than just a hotel booking platform, we promote sustainable tourism across India, Nepal, and Bhutan, empowering local communities.
              </p>
            </div>
          </div>
          {widgetMenus.map(renderWidgetMenuItem)}
        </div>
        <div className="container lg:py-12  grid grid-cols-2 gap-y-10 gap-x-5 sm:gap-x-8 md:grid-cols-5 lg:grid-cols-5 lg:gap-x-10">
          {footerData.map((col, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold mb-2">{col.title}</h3>
              <ul className="space-y-2">
                {col.items.map((item, idx) => (
                  <li key={idx} >
                    <Link
                      key={index}
                      className="text-neutral-6000 dark:text-neutral-300 hover:text-black dark:hover:text-white"
                      href={"#"}
                    // href={item.href as Route<string>}
                    >
                      {col?.title} in {item?.city__name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Footer;
