import Image from 'next/image'
import React from 'react'
import logo from '../images/logo.png'
import HomeIcon  from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';

const HeaderPage = () => {
  return (
    <>
    <div className="flex  bg-[#008EB0] font-mono">
    <div className=" pl-10 w-[230px]  ">
    <Image src={logo} alt='logo' className=' w-[120px] h-[74px] '/>
    </div>
    <div className='w-full text-sm  text-white items-center'>
    <div className=" flex  justify-between  w-full">
    <div className="flex  ">
            <p className='font-semibold border-gray-950  border-l py-2 px-4'>PaperLeass</p>
            <p className='font-thin border-gray-950  border-l py-2 px-4'> <span><PersonIcon className='w-4 h-4' /></span> Super Admin</p>
            <p className='font-thin border-gray-950  border-l py-2 px-4'>Logout</p>
        </div>
        <div className="flex gap-3  font-thin ">
        <p className=' border-gray-950  border-l py-2 px-4'> <span><NotificationsIcon className='w-4 h-4' /></span> Notification</p>
            <p className=' border-gray-950  border-l py-2 px-4'>DAte</p>
            <p className=' border-gray-950  border-l py-2 px-4'>English</p>
            <p className=' border-gray-950  border-l py-2 px-4'>NEpali</p>
        </div> 
    </div>
    <div className="flex font-thin p-3 bg-white ">
           <p className='text-gray-400'> <span><HomeIcon className='w-4 h-4'/></span> Home  </p>
        </div> 
    </div>
</div>
    </>
  )
}

export default HeaderPage