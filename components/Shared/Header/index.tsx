import Image from "next/image";
import Link from "next/link";
import { APP_NAME } from "@/lib/constants";
import { Roboto } from "next/font/google";
import Navigation from "@/components/Shared/Header/navigation";
import SearchMenu from "@/components/Shared/Header/searchMenu";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

const Header = () => {
  return (
    <header className="mb-6">
      <div className="flex justify-between items-center-safe border-b w-full py-2 h-full">
        <div className="flex justify-center items-center gap-4">
          <Link href="/">
            <Image
              src="/jj-logo.png"
              alt={`${APP_NAME} logo`}
              width={70}
              height={70}
              priority={true}
              className="flex"
            ></Image>
          </Link>
          <Link href="/">
            <span className={`hidden md:block ${roboto.className}`}>
              JJ Handmade craft
            </span>
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <SearchMenu />
        </div>
        <div className="flex justify-center items-center">
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
