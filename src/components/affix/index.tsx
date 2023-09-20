import React from 'react';

type Link = {
  name: string;
  url: string;
};

type IProps = {
  links: Link[];
};

const Affix: React.FC<IProps> = ({ links }) => (
  <div className="affix bg-white min-h-screen sticky top-px">
    <menu className="m-0 p-0">
      {links.map((link: Link) => (
        <li key={link.name}>
          <a className="block px-6 py-2 border-b" href={link.url}>
            {link.name}
          </a>
        </li>
      ))}
    </menu>
  </div>
);

export default Affix;
