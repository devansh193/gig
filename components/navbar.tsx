"use client";

import { BaggageClaim, Heart, Menu, User2 } from "lucide-react";
import Logo from "./logo-dark";

export default function Navbar() {
  return (
    <header className="top-0 h-14 flex items-center justify-between mt-2 mb-2 mx-8 bg-white/80 backdrop-blur-sm ">
      <div className="rounded-full p-1 border-2 border-gray-200">
        <Menu className="size-6" />
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <div className="size-8">
          <Logo />
        </div>
        <h1 className="font-sans font-semibold text-lg">OhhWhatt</h1>
      </div>
      <div className="flex items-center justify-center gap-x-2">
        <Heart className="size-6 rounded-full p-1 border-2 border-gray-200" />
        <BaggageClaim className="size-6 rounded-full p-1 border-2 border-gray-200" />
        <User2 className="size-6 rounded-full p-1 border-2 border-gray-200" />
      </div>
    </header>
  );
}
