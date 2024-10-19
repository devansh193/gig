"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";
import { Menu, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const navContent = [
  {
    label: "SHOP",
    href: "/shop",
  },
  {
    label: "COLLECTIONS",
    href: "/collections",
  },
  {
    label: "ABOUT",
    href: "/about",
  },
];

export default function Navbar() {
  const session = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center space-x-2">
          <Image
            src="/ohhwhat.jpeg"
            alt="ohhwhat logo"
            width={100}
            height={100}
            className="h-8 w-8"
          />
          <span className="text-xl font-bold text-black">OhhWhat</span>
        </Link>
        <nav className="hidden md:flex md:items-center md:space-x-4">
          {session.status === "authenticated" ? (
            <div className="flex items-center space-x-4">
              <Button variant="link" size="icon" className="relative">
                <ShoppingBag className="h-6 w-6" />
                <span className="sr-only">Shopping cart</span>
                <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                  0
                </div>
              </Button>
              <span className="text-sm font-semibold text-gray-700">
                Welcome, {session.data?.user?.name}
              </span>
              <Button
                variant="outline"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                Logout
              </Button>
            </div>
          ) : (
            <>
              {navContent.map((item) => (
                <Button variant="link" key={item.label} asChild>
                  <Link href={item.href}>{item.label}</Link>
                </Button>
              ))}
              <Button variant="link" asChild>
                <Link href="/sign-in">SIGN IN</Link>
              </Button>
              <Button
                variant="default"
                className="bg-black text-white hover:bg-gray-800"
                asChild
              >
                <Link href="/sign-up">SIGN UP</Link>
              </Button>
            </>
          )}
        </nav>
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col space-y-4">
              {session.status === "authenticated" && (
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative self-start"
                >
                  <ShoppingBag className="h-6 w-6" />
                  <span className="sr-only">Shopping cart</span>
                  <div className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                    0
                  </div>
                </Button>
              )}
              {session.status === "authenticated" ? (
                <>
                  <span className="text-sm font-semibold text-gray-700">
                    Welcome, {session.data?.user?.name}
                  </span>
                  <Button
                    variant="outline"
                    onClick={() => signOut({ callbackUrl: "/" })}
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  {navContent.map((item) => (
                    <Button variant="ghost" key={item.label} asChild>
                      <Link href={item.href}>{item.label}</Link>
                    </Button>
                  ))}
                  <Button variant="ghost" asChild>
                    <Link href="/sign-in">Sign in</Link>
                  </Button>
                  <Button
                    variant="default"
                    className="bg-black text-white hover:bg-gray-800"
                    asChild
                  >
                    <Link href="/sign-up">Sign up</Link>
                  </Button>
                </>
              )}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
