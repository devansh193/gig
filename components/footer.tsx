import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Facebook, Instagram, Linkedin, ArrowBigRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] px-4 py-12 md:px-6 rounded-xl md:mx-10 mx-4 mb-4">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
        <div className="space-y-6">
          <h2 className="text-xl font-medium leading-tight tracking-tight">
            SUBSCRIBE TO OUR NEWSLETTER
            <br />
            AND BE THE FIRST TO KNOW ABOUT
            <br />
            THE LATEST RELEASES, OFFERS AND
            <br />
            NEWS FROM BAGSTORE.COM
          </h2>
          <div className="space-y-4">
            <div className="relative">
              <Input
                className="h-12 rounded-full bg-white pl-4 pr-12"
                placeholder="Enter your email here"
                type="email"
              />
              <Button
                className="absolute right-1 top-1 h-10 w-10 rounded-full p-0"
                size="icon"
                variant="ghost"
              >
                <ArrowBigRight className="h-4 w-4" />
                <span className="sr-only">Subscribe</span>
              </Button>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="privacy" />
              <label
                htmlFor="privacy"
                className="text-sm leading-none text-gray-600"
              >
                I have read and agree to the bagstore privacy policy
              </label>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Image
              alt="Mastercard"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/32",
                objectFit: "contain",
              }}
              width="48"
            />
            <Image
              alt="PayPal"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/32",
                objectFit: "contain",
              }}
              width="48"
            />
            <Image
              alt="Visa"
              height="32"
              src="/placeholder.svg"
              style={{
                aspectRatio: "48/32",
                objectFit: "contain",
              }}
              width="48"
            />
          </div>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-medium">Menu</h3>
          <nav className="flex flex-col space-y-3">
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Men
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Women
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Children
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Brand
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              New
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Popular
            </Link>
          </nav>
        </div>
        <div>
          <h3 className="mb-6 text-lg font-medium">Support</h3>
          <nav className="flex flex-col space-y-3">
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Shipping & Returns
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              FAQs
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Help & Conditions
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              About
            </Link>
            <Link className="text-gray-600 hover:text-gray-900" href="#">
              Contact
            </Link>
          </nav>
        </div>
      </div>
      <div className="mx-auto mt-8 flex max-w-6xl items-center justify-end gap-4">
        <Link
          className="rounded-full border p-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Instagram className="h-5 w-5" />
          <span className="sr-only">Instagram</span>
        </Link>
        <Link
          className="rounded-full border p-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Facebook className="h-5 w-5" />
          <span className="sr-only">Facebook</span>
        </Link>
        <Link
          className="rounded-full border p-2 text-gray-600 hover:text-gray-900"
          href="#"
        >
          <Linkedin className="h-5 w-5" />
          <span className="sr-only">LinkedIn</span>
        </Link>
        <Button className="ml-4 rounded-full" variant="outline">
          Back to top
        </Button>
      </div>
    </footer>
  );
};
export default Footer;
