import { Facebook, Instagram, Twitter } from "lucide-react";
import { Button } from "../ui/button";

export const Community = () => {
  return (
    <div>
      <section className="w-full flex items-center justify-center py-12 md:py-24 lg:py-32 bg-black text-white">
        <div className="container px-4 md:px-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
            JOIN OUR COMMUNITY
          </h2>
          <p className="text-center text-gray-400 mb-8 max-w-[600px] mx-auto">
            STAY CONNECTER WITH &apos;ohh what!&apos; FOLLOW US ON SOCIAL MEDIA
            FOR EXCLUSIVE OFFERS, STYLING TIPS, AND BEHIND-THE-SCENES CONTENT.
          </p>
          <div className="flex justify-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-black hover:bg-gray-200"
            >
              <Instagram className="h-4 w-4" />
              <span className="sr-only">Instagram</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-black hover:bg-gray-200"
            >
              <Facebook className="h-4 w-4" />
              <span className="sr-only">Facebook</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-white text-black hover:bg-gray-200"
            >
              <Twitter className="h-4 w-4" />
              <span className="sr-only">Twitter</span>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};
