import Wrapper from '@/components/Wrapper';
import Link from 'next/link';
import React from 'react';

const aridetails = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-row gap-10 w-[900px] border border-b-4 border-t-0 border-l-0 border-r-0 p-2 ">
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/attributes">Attributes</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/">ARI Details</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/">Address Details</Link>
          </div>
          <div className="text-xl hover:border-b-4 border-yellow-500">
            <Link href="/">Description</Link>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default aridetails;
