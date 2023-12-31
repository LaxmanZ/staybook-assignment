import React from 'react';
import Wrapper from './Wrapper';
import Link from 'next/link';

const HomeBanner = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-row gap-10 md:w-[900px] sm:w-[200px] border border-b-4 border-t-0 border-l-0 border-r-0 p-2 ">
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/attributes">Attributes</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/aridetails">ARI Details</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/address">Address Details</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/description">Description</Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HomeBanner;
