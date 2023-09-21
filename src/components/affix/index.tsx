import React from 'react';
import Link from 'next/link';

type TLink = {
  name: string;
  url: string;
};

type IProps = {
  links: TLink[];
};

const Affix: React.FC<IProps> = ({ links }) => (
  <div className="affix bg-white min-h-screen sticky top-px">
    <menu className="m-0 p-0">
      {links.map((link: TLink) => (
        <li key={link.name}>
          <Link className="block px-6 py-2 border-b" href={link.url}>
            {link.name}
          </Link>
        </li>
      ))}
    </menu>
  </div>
);

export default Affix;
