"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";

const Navbar = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center p-5 mb-6">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className={classNames({
              "text-zinc-900": currentPath === item.href,
              "text-zinc-500": currentPath !== item.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
          >
            {item.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
