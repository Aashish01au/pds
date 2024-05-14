"use client"
 
import * as React from "react"
import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
 
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

import ViewListIcon from '@mui/icons-material/ViewList';

const DocumentReport = () => {
    const [date, setDate] = React.useState<Date>()
  return (
  <> 
<div className=" h-screen w-[1325px] bg-[#EEEEEE]">
  <div className="m-5 border border-gray-300 ">
<div className="flex  text-center">
<div className='p-2 border-r  border-gray-300'>
<ViewListIcon/> </div>
<p className='p-2 text-sm '>
अग्रिम खोज रिपोर्ट
</p>
</div>
<div className=" border border-gray-300">
{/* =============== */}
<div className="m-5">
<div className="grid md:grid-cols-4 grid-cols-4 lg:grid-cols-4 gap-3 my-5">
            {/*  */}
            <div className="">
            <p className="p-3">मिति( from ) *</p>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Select date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
      <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
            </Popover>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">मिति( to ) *</p>
            <Popover>
      <PopoverTrigger asChild>
        <Button
          variant={"outline"}
          className={cn(
            "w-[280px] justify-start text-left font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Select date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0">
      <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          initialFocus
        />
      </PopoverContent>
            </Popover>
            </div>
          </div>

          <div className="grid md:grid-cols-4 grid-cols-4 lg:grid-cols-4 gap-3 my-5">
            {/*  */}
            <div className="">
            <p className="p-3">कागजात वर्ग  *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400" id="">
                    <option value="">छान्नुहोस्</option>
                    <option value="">Received Document</option>
                    <option value="">Send Document</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">पठाउने /बुझने कार्यालय नाम  *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">फिदिम नगरपालिका </option>
                    <option value="">वडा नं १ </option>
                    <option value="">Sloane Bradley</option>
                    <option value="">Softech</option>
                </select>
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">आर्थिक बर्ष  *</p>
                <select name="" className="bg-white p-3 border w-full text-sm text-gray-400 " id="">
                    <option value="">छान्नुहोस्</option>
                    <option value="">80/81</option>
                    <option value="">२०८०/२०८१</option>
                    <option value="">79/80</option>
                </select>
            </div>
          
          
          </div>
          {/* =======   2nd row ================ */}
          <div className="grid md:grid-cols-4 grid-cols-4 lg:grid-cols-4 gap-3 my-5">
            {/*  */}
            <div className="">
            <p className="p-3">दर्ता नम्बर  *</p>
             <input type="text"  className="bg-white p-2 border w-full text-sm text-gray-400 " />
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">पत्रको चलानी नम्बर  *</p>
             <input type="text"  className="bg-white p-2 border w-full text-sm text-gray-400 " />
            </div>
            {/*  */}
            <div className="">
            <p className="p-3">चलानी नम्बर  *</p>
             <input type="text"  className="bg-white p-2 border w-full text-sm text-gray-400 " />
            </div>
          
          
          </div>

          {/* send btn */}
          <div className="">
            <input type="submit" className=" py-1.5 px-2.5 rounded bg-blue-800 hover:bg-blue-900 text-white " value="Submit" />
          </div>
      </div>
      </div>
{/* ================= */}
<div className="border border-gray-300 bg-white text-center">
  <p className='text-sm py-3 '>Record Not Found </p>
</div>
</div>
</div>
</>
  );
}

export default DocumentReport;
