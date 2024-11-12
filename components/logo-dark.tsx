import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href={"/"}>
      <div className="flex items-center space-x-2">
        <Image
          className="rounded-md"
          src={"/logo-light.jpeg"}
          alt="logo"
          width={300}
          height={200}
        />
      </div>
    </Link>
  );
}
