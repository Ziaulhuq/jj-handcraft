import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-0 mt-4 text-center border-t-1 p-6 font-bold text-[14px]">
      &copy; {currentYear} {APP_NAME}. All rights reserved.
    </footer>
  );
};

export default Footer;
