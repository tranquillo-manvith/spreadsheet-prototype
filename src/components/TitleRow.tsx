import { type JSX } from "react";
import Plus from "../assets/title_row/plus.svg";

function TitleRow(): JSX.Element {
  return (
    <>
      <div className="flex flex-row pl-[32px] pr-[16px] pt-[4px] m-auto w-[1440px] h-[48px] bg-[#FFFFFF] border border-[#EEEEEE]">
        <div className="flex flex-row w-[437px] h-[44px]">
          <div className="flex items-center justify-center px-[16px] py-[10px] hover:border-t-2 hover:border-t-[#4B6A4F] hover:bg-[#E8F0E9] text-[16px] font-[500] hover:font-[600] hover:text-[#3E5741] text-[#757575] cursor-pointer">
            All Orders
          </div>
          <div className="flex items-center justify-center px-[16px] py-[10px] hover:border-t-2 hover:border-t-[#4B6A4F] hover:bg-[#E8F0E9] text-[16px] font-[500] hover:font-[600] hover:text-[#3E5741] text-[#757575] cursor-pointer">
            Pending
          </div>
          <div className="flex items-center justify-center px-[16px] py-[10px] hover:border-t-2 hover:border-t-[#4B6A4F] hover:bg-[#E8F0E9] text-[16px] font-[500] hover:font-[600] hover:text-[#3E5741] text-[#757575] cursor-pointer">
            Review
          </div>
          <div className="flex items-center justify-center px-[16px] py-[10px] hover:border-t-2 hover:border-t-[#4B6A4F] hover:bg-[#E8F0E9] text-[16px] font-[500] hover:font-[600] hover:text-[#3E5741] text-[#757575] cursor-pointer">
            Arrived
          </div>
          <div className="flex items-center justify-center px-[16px] py-[10px] hover:border-t-2 hover:border-t-[#4B6A4F] hover:bg-[#E8F0E9] cursor-pointer">
            <img src={Plus}></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default TitleRow;
