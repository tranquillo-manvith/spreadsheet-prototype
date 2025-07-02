import { type JSX } from "react";
import WorkspaceLogo from "../assets/workspace_logo.svg";
import Chevron from "../assets/chevron.svg";
import ThreeDots from "../assets/three_dots.svg";
import SearchIcon from "../assets/search_icon.svg";
import NotificationBell from "../assets/notification_bell.svg";
import Pfp from "../assets/pfp.png";

function TopBar(): JSX.Element {
  return (
    <div className="text-[14px] font-[500] items-center justify-between border-b border-[#EEEEEE] flex flex-row w-full h-[56px] px-[16px] py-[8px] border">
      <div className="flex flex-row items-center h-[24px] w-[343px] gap-[16px]">
        <div className="panel">
          <img src={WorkspaceLogo} alt="WorkspaceLogo"></img>
        </div>
        <div className="breadcrumbs flex flex-row items-center gap-[4px]">
          <div className="text-[#AFAFAF]">Workspace</div>
          <img src={Chevron} alt="Chevron" className="h-[12px] w-[12px]"></img>
          <div className="text-[#AFAFAF]">Folder 2</div>
          <img src={Chevron} alt="Chevron" className="h-[12px] w-[12px]"></img>
          <div className="breadcrumbs flex flex-row items-center gap-[8px]">
            <div className="text-[#121212]">Spreadsheet 3</div>
            <img src={ThreeDots} alt="more"></img>
          </div>
        </div>
      </div>

      <div className="actionsRight items-center flex flex-row gap-[4px] h-[40px] w-[325px]">
        <div className="searchBar  flex bg-[#F6F6F6] items-center rounded-[6px] p-[12px] h-[40px] w-[165px] gap-[8px]">
          <img src={SearchIcon} alt="Search"></img>
          <div className="text-[12px] font-[400] text-[#757575]">
            Search within sheet
          </div>
        </div>
        <div>
          <img
            src={NotificationBell}
            alt="notifications"
            className="cursor-pointer"
          ></img>
        </div>
        <div className=" flex items-center profileBlock gap-[8px] py-[6px] pl-[8px] pr-[12px]">
          <img
            src={Pfp}
            alt="profile picture"
            className="h-[28px] w-[28px] cursor-pointer"
          ></img>

          <div className="flex flex-col h-[26px] w-[56px] relative">
            <div className="absolute flex top-0 left-0 font-[400] text-[12px] text-[#121212] h-[16px] w-[56px]">
              John Doe
            </div>
            <div className="absolute flex bottom-0 left-0 font-[400] text-[10px] text-[#757575] h-[12px] w-[56px]">
              john.doe...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopBar;
