import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";

const LandingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="">{children}</main>
      <Footer />
    </div>
  );
};
export default LandingLayout;
