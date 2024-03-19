import React from 'react';
import Link from 'next/link';
import Logo from './Logo';
import Description from './Description';
import Tags from './Tags';
import Title from './Title';

interface CardProps {
  title: string;
  logo: string;
}

const Card: React.FC<CardProps> = ({ title, logo }) => {
  return (
    <Link href={`/cardDetails/${title}`} passHref>
      {/* <div className="flex items-center justify-center h-screen cursor-pointer"> */}
        <div className="h-[266px] w-[919px] rounded-[30px] border-[1px] bg-white p-[24px]">
          <div className="flex flex-col md:flex-row"> {/* Added responsive classes */}
            <Logo logo={logo} />
            <div className="h-[100%] w-[100%] md:ml-[24px] mt-[24px] md:mt-0 md:w-[755px] flex flex-col gap-[8px]"> {/* Added responsive classes */}
              <Title title={title} />
              <Description />
              <Tags />
            </div>
          </div>
        </div>
      {/* </div> */}
    </Link>
  );
};

export default Card;