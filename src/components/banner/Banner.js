import React from 'react';
import { bannerImg } from '../../assets'; // Adjust path as needed

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center">
      <img
        src={bannerImg}
        alt="banner"
        className="w-52 h-52 md:w-72 md:h-72 rounded-full object-cover border-[6px] border-gray-300 shadow-lg"
      />
    </div>
  );
};

export default RightBanner;
