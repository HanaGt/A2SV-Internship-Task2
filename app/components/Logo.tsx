import React from 'react';

const Logo = ({ logo }) => {
  return (
    <div className="h-[100%] w-[164px]">
      <img src={logo} alt="Logo" className="h-[100%] w-[100%] object-cover" />
    </div>
  );
};

export default Logo;
