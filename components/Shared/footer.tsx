import { APP_NAME } from "@/lib/constants";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mb-0">
      {currentYear} {APP_NAME} All rights reserved.
    </footer>
  );
};

export default Footer;
