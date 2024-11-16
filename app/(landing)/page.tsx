"use client";
import { Main } from "@/components/landing/hero";
import { Marketing } from "@/components/landing/marketing";
import Navbar from "@/components/navbar";
import CouponBanner from "@/components/landing/coupon-banner";
import Footer from "@/components/footer";
export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <Main />
      <Marketing />
      <CouponBanner />
      <Footer />
    </div>
  );
}
