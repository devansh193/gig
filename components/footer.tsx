import Link from "next/link";

const footerItems = [
  {
    title: "OHHWHAT",
    items: ["About Us", "Editorial"],
  },
  {
    title: "Menu",
    items: ["Brand", "New", "Popular"],
  },
  {
    title: "Support",
    items: ["FAQs", "Help & Conditions", "About", "Contact"],
  },
];

const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] px-4 py-8 md:px-6 rounded-xl mx-4 md:mx-10 mb-4">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {footerItems.map((section, index) => (
            <div key={index} className="flex flex-col col-span-1">
              <h3 className="text-md font-medium mb-4">{section.title}</h3>
              <nav className="flex flex-col space-y-3 flex-grow">
                {section.items.map((item, itemIndex) => (
                  <Link
                    key={itemIndex}
                    href="/"
                    className="text-sm text-gray-600 hover:text-gray-900 transition-colors"
                  >
                    {item}
                  </Link>
                ))}
              </nav>
            </div>
          ))}
        </div>
        <div className="mt-8 border-t border-gray-200 pt-8 text-center">
          <Link
            href="https://dub.sh/devansh-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-xs text-gray-400 mb-2">
              Designed and developed by Devansh
            </p>
          </Link>

          <p className="text-xs text-gray-500">
            © 2024 OHHWHAT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
