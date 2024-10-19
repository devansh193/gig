import { Main } from "@/components/landing/hero";
import { Marketing } from "@/components/landing/marketing";
//import { About } from "@/components/landing/about";
import { Community } from "@/components/landing/community";

export default function LandingPage() {
  return (
    <div className="flex flex-col  min-h-screen bg-white">
      <main className="flex-1">
        <Main />
        <Marketing />
        <Community />
      </main>
    </div>
  );
}
