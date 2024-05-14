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
const AllDocument
 = () => {
  return (
  <> 
<div className=" h-screen w-[1325px] bg-[#EEEEEE]">
  <p className='mt-5 ml-5 font-semibold text-3xl'>सबै पत्रहरु</p>
  <div className="mx-3">
  <button className='bg-blue-700 px-3 py-2 text-white hover:bg-blue-800 m-3'>कारवाही भएका पत्रहरु </button>
  <button className='bg-blue-700 px-3 py-2 text-white hover:bg-blue-800'>कारवाही नभएका पत्रहरु </button>
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
<div className="border border-gray-300 bg-white text-center">
 <table className='w-full '>
    <thead>
        <tr className='border font-normal  text-sm   text-center'>
            <th className='border-r'># </th>
            <th  className='border-r py-3 px-2' >आर्थिक बर्ष </th>
            <th  className='border-r py-3 px-2' >दर्ता नं  </th>
            <th  className='border-r py-3 px-2' >बिषय </th>
            <th  className='border-r py-3 px-2' >पठाउने कार्यालय  </th>
            <th  className='border-r py-3 px-2' >पठाउने कार्यालय ठेगाना पत्रको नेपाली मिति </th>
            <th  className='border-r py-3 px-2' >कैफियत 	कारवाही भएको स्थिति  </th>
            <th  className='border-r py-3 px-2' >कार्य  </th>
                 	
        </tr>
    </thead>
    <tbody>
        <tr className='border text-gray-600 text-sm  py-2'>
            <td  className='border-r py-3 px-2' >1 </td>
            <td  className='border-r py-3 px-2' >80/81</td>
            <td  className='border-r py-3 px-2' >3445  </td>
            <td  className='border-r py-3 px-2' >भुक्तानी बारे  </td>
            <td  className='border-r py-3 px-2' > 	 पठाउने  </td>
            <td  className='border-r py-3 px-2' > 2080-11-8 </td>
            <td  className='border-r py-3 px-2 text-red-600 font-semibold' > Pending </td>
            <td  className='border-r py-3 px-2 flex gap-3 justify-center' >
                <button className='bg-green-700 px-2 py-1 text-white text-sm'>view</button>
                <button className='bg-blue-700 px-2 py-1 text-white text-sm'>done</button>
                <button className='bg-red-700 px-2 py-1 text-white text-sm'>delete</button>
                  </td>
                 	
        </tr>
        <tr className='border text-gray-600 text-sm  py-2'>
            <td  className='border-r py-3 px-2' >2 </td>
            <td  className='border-r py-3 px-2' >80/81</td>
            <td  className='border-r py-3 px-2' >3445  </td>
            <td  className='border-r py-3 px-2' >भुक्तानी बारे  </td>
            <td  className='border-r py-3 px-2' > 	 पठाउने  </td>
            <td  className='border-r py-3 px-2' > 2080-11-8 </td>
            <td  className='border-r py-3 px-2 text-red-600 font-semibold' > Pending </td>
            <td  className='border-r py-3 px-2 flex gap-3 justify-center' >
                <button className='bg-green-700 px-2 py-1 text-white text-sm'>view</button>
                <button className='bg-blue-700 px-2 py-1 text-white text-sm'>done</button>
                <button className='bg-red-700 px-2 py-1 text-white text-sm'>delete</button>
                  </td>
                 	
        </tr>
        <tr className='border text-gray-600 text-sm  py-2'>
            <td  className='border-r py-3 px-2' >3 </td>
            <td  className='border-r py-3 px-2' >80/81</td>
            <td  className='border-r py-3 px-2' >3445  </td>
            <td  className='border-r py-3 px-2' >भुक्तानी बारे  </td>
            <td  className='border-r py-3 px-2' > 	 पठाउने  </td>
            <td  className='border-r py-3 px-2' > 2080-11-8 </td>
            <td  className='border-r py-3 px-2 text-red-600 font-semibold' > Pending </td>
            <td  className='border-r py-3 px-2 flex gap-3 justify-center' >
                <button className='bg-green-700 px-2 py-1 text-white text-sm'>view</button>
                <button className='bg-blue-700 px-2 py-1 text-white text-sm'>done</button>
                <button className='bg-red-700 px-2 py-1 text-white text-sm'>delete</button>
                  </td>
                 	
        </tr>
        <tr className='border text-gray-600 text-sm  py-2'>
            <td  className='border-r py-3 px-2' >4 </td>
            <td  className='border-r py-3 px-2' >80/81</td>
            <td  className='border-r py-3 px-2' >3445  </td>
            <td  className='border-r py-3 px-2' >भुक्तानी बारे  </td>
            <td  className='border-r py-3 px-2' > 	 पठाउने  </td>
            <td  className='border-r py-3 px-2' > 2080-11-8 </td>
            <td  className='border-r py-3 px-2 text-red-600 font-semibold' > Pending </td>
            <td  className='border-r py-3 px-2 flex gap-3 justify-center' >
                <button className='bg-green-700 px-2 py-1 text-white text-sm'>view</button>
                <button className='bg-blue-700 px-2 py-1 text-white text-sm'>done</button>
                <button className='bg-red-700 px-2 py-1 text-white text-sm'>delete</button>
                  </td>
                 	
        </tr>
        <tr className='border text-gray-600 text-sm  py-2'>
            <td  className='border-r py-3 px-2' >5 </td>
            <td  className='border-r py-3 px-2' >80/81</td>
            <td  className='border-r py-3 px-2' >3445  </td>
            <td  className='border-r py-3 px-2' >भुक्तानी बारे  </td>
            <td  className='border-r py-3 px-2' > 	 पठाउने  </td>
            <td  className='border-r py-3 px-2' > 2080-11-8 </td>
            <td  className='border-r py-3 px-2 text-red-600 font-semibold' > Pending </td>
            <td  className='border-r py-3 px-2 flex gap-3 justify-center' >
                <button className='bg-green-700 px-2 py-1 text-white text-sm'>view</button>
                <button className='bg-blue-700 px-2 py-1 text-white text-sm'>done</button>
                <button className='bg-red-700 px-2 py-1 text-white text-sm'>delete</button>
                  </td>
                 	
        </tr>
        
    </tbody>
   
    
 </table>
 <div className="text-end">
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
    </div>
</div>
</div>
</div>
</>
  );
}

export default AllDocument
;
