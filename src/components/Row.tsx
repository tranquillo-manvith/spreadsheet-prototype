import { type JSX } from "react";
import DoubleChevron from "../assets/row/chevron_double.svg";
import Seperator from "../assets/row/seperator.svg";
import HideIcon from "../assets/row/hide_eye.svg";
import ArrowSort from "../assets/row/arrow_sort.svg";
import Filter from "../assets/row/filter.svg";
import ArrowAutofit from "../assets/row/arrow_autofit.svg";
import Import from "../assets/row/arrow_download.svg";
import Export from "../assets/row/arrow_upload.svg";
import Share from "../assets/row/share.svg";
import ArrowSplit from "../assets/row/arrow_split.svg";

function Row(): JSX.Element {
  return (
    <div className="flex flex-row items-center px-[8px] py-[8px] h-[48px] border-b border-[#EEEEEE] gap-[8px] ">
      <button className="toolbar flex flex-row items-center text-[14px] font-[400] text-[#121212] p-[8px] gap-[4px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer w-[91px]">
        <div className="text-[14px] font-[400] text-[#121212]">Tool bar</div>
        <img src={DoubleChevron} alt="toolbar"></img>
      </button>
      <div>
        <img src={Seperator} className="w-[1px] h-[24px]"></img>
      </div>
      <div className="tableControlsBLock flex gap-[4px] w-[871px] ">
        <button className="flex flex-row items-center gap-[4px] p-[8px] w-[118px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer">
          <img src={HideIcon} alt="hide" className="h-[20px] w-[20px]"></img>
          <div className="text-[14px] font-[400]">Hide fields</div>
        </button>
        <button className="flex flex-row items-center gap-[4px] p-[8px] w-[73px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer">
          <img src={ArrowSort} alt="sort" className="h-[20px] w-[20px]"></img>
          <div className="text-[14px] font-[400]">Sort</div>
        </button>
        <button className="flex flex-row items-center gap-[4px] p-[8px] w-[80px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer">
          <img src={Filter} alt="filter" className="h-[20px] w-[20px]"></img>
          <div className="text-[14px] font-[400]">Filter</div>
        </button>
        <button className="flex flex-row items-center gap-[4px] p-[8px] w-[105px] hover:bg-[#f5f5f5] rounded-[4px] cursor-pointer">
          <img
            src={ArrowAutofit}
            alt="hide"
            className="h-[20px] w-[20px]"
          ></img>
          <div className="text-[14px] font-[400]">Cell view</div>
        </button>
      </div>
      <div className="actionsRight flex flex-row w-[437px] gap-[8px]">
        <div className="Controls flex w-[279px] gap-[8px]">
          <button className="import flex flex-row items-center rounded-[6px] border border-[#EEEEEE] px-[8px] py-[12px] gap-[4px] w-[90px] h-[36px] hover:bg-[#f5f5f5] transition-colors cursor-pointer">
            <img src={Import} alt="import" className="h-[20px] w-[20px]" />
            <div className="text-[14px] text-[#545454]">Import</div>
          </button>
          <button className="import flex flex-row items-center rounded-[6px] border border-[#EEEEEE] px-[8px] py-[12px] gap-[4px] w-[89px] h-[36px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <img src={Export} alt="export" className="h-[20px] w-[20px]"></img>
            <div className="text-[14px] text-[#545454]">Export</div>
          </button>
          <button className="import flex flex-row items-center rounded-[6px] border border-[#EEEEEE] px-[8px] py-[12px] gap-[4px] w-[84px] h-[36px] cursor-pointer hover:bg-[#f5f5f5] transition-colors">
            <img src={Share} alt="share" className="h-[20px] w-[20px]"></img>
            <div className="text-[14px] text-[#545454]">Share</div>
          </button>
        </div>
        <button className="flex flex-row items-center px-[24px] py-[8px] gap-[4px] h-[36px] w-[150px] bg-[#4B6A4F] rounded-[6px] hover:bg-[#668f6c] cursor-pointer">
          <img
            src={ArrowSplit}
            alt="new action"
            className="h-[20px] w-[20px]"
          ></img>
          <div className="text-[14px] font-[500] text-[#FFFFFF] ">
            New Action
          </div>
        </button>
      </div>
    </div>
  );
}

export default Row;
