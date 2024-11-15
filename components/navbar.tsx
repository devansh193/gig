"use client";

import { Menu, ShoppingBag, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface NavItems {
  name: string;
  href: string;
  dropdown?: {
    name: string;
    href: string;
  }[];
}

interface NavItemProps {
  item: NavItems;
}

interface SubItemProps {
  href: string;
  name: string;
}

const navItems = [
  { name: "BEST SELLER", href: "#" },
  {
    name: "SHOP BY CATEGORY",
    href: "#",
    dropdown: [
      { name: "Tote Bags", href: "#tote-bags" },
      { name: "Backpacks", href: "#backpacks" },
      { name: "Messenger Bags", href: "#messenger-bags" },
      { name: "Laptop Bags", href: "#laptop-bags" },
    ],
  },
  {
    name: "FEATURED COLLECTION",
    href: "#",
    dropdown: [
      { name: "Summer Essentials", href: "#summer-essentials" },
      { name: "Eco-Friendly Line", href: "#eco-friendly" },
      { name: "Travel Series", href: "#travel-series" },
      { name: "Limited Edition", href: "#limited-edition" },
    ],
  },
  { name: "UNDER 1500", href: "#" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const cartVal = 0;

  const NavLink = ({ item }: NavItemProps) => {
    if (item.dropdown) {
      return (
        <DropdownMenu>
          <DropdownMenuTrigger className="flex items-center text-sm font-medium hover:text-gray-900 transition-colors focus:outline-none">
            {item.name}
            <ChevronDown className="ml-1 h-4 w-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2 bg-white rounded-md shadow-lg">
            {item.dropdown.map((subItem: SubItemProps) => (
              <DropdownMenuItem key={subItem.name} className="p-0">
                <Link
                  href={subItem.href}
                  className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md flex items-center transition-colors"
                >
                  {subItem.name}
                </Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
    return (
      <Link
        href={item.href}
        className="text-sm font-medium hover:text-gray-900 transition-colors"
      >
        {item.name}
      </Link>
    );
  };

  return (
    <header className="w-full py-4 px-4 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden mr-2">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="w-[80vw] sm:w-[350px] lg:hidden"
              >
                <nav className="flex flex-col gap-4 mt-8">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.name}>
                      {item.dropdown ? (
                        <DropdownMenu>
                          <DropdownMenuTrigger className="flex items-center text-lg font-medium hover:text-gray-900 transition-colors focus:outline-none">
                            {item.name}
                            <ChevronDown className="ml-1 h-4 w-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56 p-2 bg-white rounded-md shadow-lg">
                            {item.dropdown.map((subItem) => (
                              <DropdownMenuItem
                                key={subItem.name}
                                className="p-0"
                              >
                                <Link
                                  href={subItem.href}
                                  className="w-full px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 rounded-md flex items-center transition-colors"
                                >
                                  <span className="w-2 h-2 bg-primary rounded-full mr-2" />
                                  {subItem.name}
                                </Link>
                              </DropdownMenuItem>
                            ))}
                          </DropdownMenuContent>
                        </DropdownMenu>
                      ) : (
                        <Link
                          href={item.href}
                          className="text-lg font-medium hover:text-gray-900 transition-colors"
                        >
                          {item.name}
                        </Link>
                      )}
                    </SheetClose>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link className="font-semibold text-xl" href="/">
              OHHWHAT
            </Link>
          </div>

          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <NavLink key={item.name} item={item} />
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="sr-only">Shopping cart</span>
              {cartVal > 0 && (
                <span className="absolute top-0 right-0 h-4 w-4 rounded-full bg-black text-xs text-white flex items-center justify-center">
                  {cartVal}
                </span>
              )}
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
