"use client"
import { ClassNames } from '@emotion/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import DownloadIcon from '@mui/icons-material/Download';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FolderIcon from '@mui/icons-material/Folder';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import PlaceIcon from '@mui/icons-material/Place';
import React from 'react'

const navLink=[
    {name:"ड्यासबोर्डमा", href:"/viewpage"},
    {name:"कागजातको खोजि", href:"/document-Report"},
    {name:"दर्ता", href:"/document-upload"},
    {name:"चलानी ", href:"/sendDocument"},
    {name:"सबै पत्रहरु", href:"/allDocument"},
    {name:"सबै दर्ता पत्रहरु", href:"/#"},
    {name:"सबै चलानी पत्रहरु", href:"/#"},
    {name:"DMS", href:"/#"},
    {name:"DMS Archive", href:"/#"},
    {name:"कागजातको प्रकार", href:"/#"},
    {name:"आर्थिक बर्ष", href:"/#"},
    {name:"साखा", href:"/#"},
    {name:"Database Backup", href:"/#"},
]

const NavbarPage = () => {
const pathname=usePathname();
  return (
    <div className='w-[205px] h-screen bg-[#008EB0] '>
{navLink.map((link,index)=>{
    const isActive=pathname.startsWith(link.href);
    return (
  <Link href={link.href} key={link.name} >
   <div  className={isActive ? " bg-[#ED1C24] p-3 text-white ": "p-3 text-white flex  hover:bg-[#27a9e3] hover:text-white  text-center text-sm font-mono border-gray-950  border-b  "}>
   <span className='mr-3' >    
                {index === 0 && <HomeIcon className='w-5 h-5'/>}
                {index === 1 && <SearchIcon className='w-5 h-5'/> }
                {index === 2 &&  <DownloadIcon className='w-5 h-5'/>}
                {index === 3 &&  <FileUploadIcon className='w-5 h-5'/>}
                {index === 4 &&  <InsertDriveFileIcon className='w-5 h-5'/>}
                {index === 5 &&  <FolderIcon className='w-5 h-5'/>}
                {index === 6 &&  <PermMediaIcon className='w-5 h-5'/>} 
                {index === 7 &&  <DownloadIcon className='w-5 h-5'/>}
                {index === 8 &&  <FileUploadIcon className='w-5 h-5'/>}
                {index === 9 &&  <DescriptionIcon className='w-5 h-5'/>}
                {index === 10 &&  <CalendarMonthIcon className='w-5 h-5'/>}
                {index === 11 &&  <PlaceIcon className='w-5 h-5'/>} 
                {index === 12 &&  <DownloadIcon className='w-5 h-5'/>}
                </span>   
 
{link.name}
   </div> 
  </Link>
    )
})}

    </div>
  )
}

export default NavbarPage