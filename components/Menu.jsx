import React from 'react';
import Link from 'next/link';

const data = [
  { id: 1, name: 'Home', url: '/' },
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Services', url: '/services' },
  { id: 4, name: 'Contact', url: '/contact' },
];

const Menu = () => {
  return (
    <ul className="hidden md:flex items-center gap-8 text-black font-medium">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            <li className="cursor-pointer">
              <Link href={item?.url}>{item.name}</Link>
            </li>
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Menu;
