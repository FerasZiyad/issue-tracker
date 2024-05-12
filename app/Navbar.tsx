"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { Box } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();

  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues/list" },
  ];
  return (
    <nav className="flex space-x-6 border-b h-14 items-center p-5 mb-6">
      <Link href="/">
        <FaBug />
      </Link>
      <ul className="flex space-x-6">
        {links.map((item, index) => (
          <li key={index}>
            <Link
              href={item.href}
              className={classNames({
                "text-zinc-900": currentPath === item.href,
                "text-zinc-500": currentPath !== item.href,
                "hover:text-zinc-800 transition-colors": true,
              })}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <Box>
        {status === "authenticated" && (
          <Link href="/api/auth/signout">Log out</Link>
        )}
        {status === "unauthenticated" && (
          <Link href="/api/auth/signin">LogIn</Link>
        )}
      </Box>
    </nav>
  );
};

export default Navbar;
