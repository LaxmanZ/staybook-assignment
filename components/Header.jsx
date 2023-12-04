import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import Wrapper from './Wrapper';
import Menu from './Menu';

import { IoMdHeartEmpty } from 'react-icons/io';
import { BsCart } from 'react-icons/bs';
import { BiMenuAltRight } from 'react-icons/bi';
import { VscChromeClose } from 'react-icons/vsc';
import MenuMobile from './MenuMobile';

const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header
      className={`w-full h-[50px] md:h-[80px] bg-white flex items-center justify-between z20 sticky top-0 transition-transform duration-300 &{show}`}
    >
      <Wrapper className="h-[60px] flex justify-between items-center custom-wrapper-class">
        <Link href="/">
          <Image
            src="/logo.png"
            width={300}
            height={100}
            alt="logo"
            className="md:w-[150px]  w-[100px] h-[30px] md:h-[50px]"
          />
        </Link>
        <Menu />

        {mobileMenu && <MenuMobile setMobileMenu={setMobileMenu} />}

        <div className="flex items-center text-black">
          <button className="px-4 py-2 rounded-md bg-black/[0.5] hover:bg-blue-500">
            Login
          </button>

          <div className="w-8 md:w-12 h-8 md:h-12 rounded-full flex md:hidden justify-center items-center hover:bg-black/[0.05] cursor-pointer relative -mr-2">
            {mobileMenu ? (
              <VscChromeClose
                className="text-[16px]"
                onClick={() => setMobileMenu(false)}
              />
            ) : (
              <BiMenuAltRight
                className="text-[20px]"
                onClick={() => setMobileMenu(true)}
              />
            )}
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
