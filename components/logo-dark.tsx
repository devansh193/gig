import Image from "next/image";
import Link from "next/link";

export default function TestifyLogo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <Image
          className="invert-0"
          src={"/logo-light.jpeg"}
          alt="logo"
          width={200}
          height={160}
        />
      </div>
    </Link>
  );
}
