import React from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
const SendDocument = () => {
  return (
  <> 
<div className=" h-screen w-[1325px] bg-[#EEEEEE]">
<div className="mx-3">
  <button className='bg-blue-700 px-3 py-2 text-white text-sm hover:bg-blue-800 m-3'>थप्नुहोस् </button>
  <button className='bg-blue-700 px-3 py-2 text-white text-sm hover:bg-blue-800 mr-3'>प्राप्त </button>
  <button className='bg-blue-700 px-3 py-2 text-white text-sm hover:bg-blue-800'> दर्ता प्रतिवेदन खोज     </button>
  </div>
  <div className="mx-5 border border-gray-300 ">
<div className="flex  ">
<div className='p-2 border  border-gray-300'>
<KeyboardArrowDownIcon className=''/>
 </div>
 <div className="w-full flex justify-between ">
<p className='p-2'>
दर्ता सूचीकरण 
</p>
<div className="items-end">
    <p className='px-3 py-2 text-white bg-yellow-600 hover:bg-yellow-800 cursor-pointer'>Print</p>
</div>
</div>
</div>
<div className="border border-gray-300 bg-white text-center text-sm pb-12">
Record(s) Not Found!!! 
</div>
</div>
</div>
</>
  );
}

export default SendDocument;
