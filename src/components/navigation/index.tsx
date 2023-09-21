import { useState } from 'react';
import Link from 'next/link';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type TLink = {
  label: string;
  href: string;
};

const links: TLink[] = [];

const secondaryLinks: TLink[] = [
  {
    label: `Home`,
    href: `/`,
  },
  {
    label: `About`,
    href: `/about`,
  },
  {
    label: `Facilities`,
    href: `/facilities`,
  },
  {
    label: `Contact us`,
    href: `/contact-us`,
  },
];

const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className="p-2 text-gray-400"
  >
    <span className="sr-only">Open menu</span>
    {showMenu ? (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>
);

const MobileMenu = () => (
  <div className="md:hidden">
    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
      {links.map((link: TLink) => (
        <Link href={link.href} className="text-gray-500 block px-3 py-2 text-base font-medium" key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
    <div className="pt-2 pb-2">
      <div className="px-2 space-y-1">
        {secondaryLinks.map((link: TLink) => (
          <Link
            key={`mobile-${link.label}`}
            href={link.href}
            className="block px-3 py-2 text-base font-medium text-gray-500"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className="bg-slate-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img className="h-14 w-14" src="/logo.svg" alt="logo" />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline gap-4">
                {links.map((link: TLink) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="bg-yellow-300 text-slate-700 px-4 py-2 rounded-md font-medium"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center md:ml-6 gap-4">
              {secondaryLinks.map((link: TLink) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="bg-yellow-300 text-slate-700 px-4 py-2 rounded-md font-medium"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      </div>
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
