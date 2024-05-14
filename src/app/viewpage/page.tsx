import React from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const ViewPage = () => {
  return (
  <> 
<div className=" h-screen w-[1325px] bg-[#EEEEEE]">
  <p className='p-5 text-2xl'>ड्यासबोर्डमा स्वागत छ </p>
  <div className="mx-5 border border-gray-300 ">
<div className="flex ">
<div className='p-2 border  border-gray-300'>
<KeyboardArrowDownIcon className=''/> </div>
<p className='p-2'>
कागजातको अपलोड
</p>
</div>
<div className="border border-gray-300 bg-white text-center">
  <p className='text-sm'>Record(s) Not Found!!! </p>
</div>
</div>
</div>
</>
  );
}

export default ViewPage;
