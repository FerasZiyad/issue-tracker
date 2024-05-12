"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useSession } from "next-auth/react";
import React from "react";
import { FaBug } from "react-icons/fa";
import classNames from "classnames";
import { Box, Container, Flex } from "@radix-ui/themes";

const Navbar = () => {
  const currentPath = usePathname();

  const { status, data: session } = useSession();

  const links = [
    { label: "Dashboard", href: "/" },
    { label: "issues", href: "/issues/list" },
  ];
  return (
    <nav className="border-b mb-5 px-5 py-3">
      <Container>
        <Flex className="my-3" justify="between">
          <Flex align="center" gap="3">
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
          </Flex>

          <Box>
            {status === "authenticated" && (
              <Link href="/api/auth/signout">Log out</Link>
            )}
            {status === "unauthenticated" && (
              <Link href="/api/auth/signin">LogIn</Link>
            )}
          </Box>
        </Flex>
      </Container>
    </nav>
  );
};

export default Navbar;
