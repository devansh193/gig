import Image from "next/image";
import Link from "next/link";

export default function TestifyLogo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <Image src={"/ohhwhat.jpeg"} alt="logo" width={120} height={80} />
      </div>
    </Link>
  );
}
