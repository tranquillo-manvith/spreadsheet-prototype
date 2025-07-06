import { type JSX } from "react";
import Hash from "../assets/hash.svg";
import data from "../data/data.json";
import statusColorJson from "../data/status_color.json";
import priorityColorJson from "../data/priority.json";
import LinkIcon from "../assets/linkIcon.svg";
import CircleArrow from "../assets/circle_arrow.svg";
import WhiteArrowSplit from "../assets/arrow_split_white.svg";
import GreyThreeDots from "../assets/three_dots_grey.svg";
import GreyArrowSplit from "../assets/arrow_split_grey.svg";
import PlusSymbol from "../assets/plus_symbol.svg";
import JobRequestLogo from "../assets/table/job_request.svg";
import DownChevron from "../assets/table/chevron_down.svg";
import Calender from "../assets/table/calender.svg";
import CircledChevron from "../assets/table/circled_chevron.svg";
import Person from "../assets/table/person.svg";
import URL from "../assets/table/url.svg";
import Emoji from "../assets/table/emoji.svg";

// Type Definitions
type Status = "In-process" | "Need to start" | "Complete" | "Blocked";

type Priority = "High" | "Medium" | "Low";

type PriorityColor = {
  [key in Priority]: string;
};

type StatusColor = {
  [key in Status]: {
    "text-color": string;
    bg: string;
  };
};

type JobData = {
  id: number;
  jobRequest: string;
  submitted: string;
  status: Status;
  submitter: string;
  url: string;
  assigned: string;
  priority: string;
  dueDate: string;
  estValue: string;
};

// Safely cast status color JSON
const statusColor: StatusColor = statusColorJson as StatusColor;
const priorityColor: PriorityColor = priorityColorJson as PriorityColor;

function SpreadsheetTable(): JSX.Element {
  return (
    <div className="w-full h-[872px] bg-[#F6F6F6] border border-[#E2E8F0]">
      <table className="border-separate border-spacing-[1px]">
        <thead className="text-[12px] font-[600] text-[#757575]">
          <tr>
            <th colSpan={1} className=" bg-[#FFFFFF] h-[32px] "></th>
            <th
              colSpan={4}
              className="bg-[#E2E2E2] h-[32px]  text-left pl-[8px] pr-[4px]"
            >
              <div className="flex flex-row gap-[8px] bg-[#E2E2E2]">
                <div className="flex flex-row items-center justify-center p-[4px] gap-[4px] text-[#545454] font-[400] bg-[#EEEEEE] rounded-[4px]">
                  <img
                    src={LinkIcon}
                    alt="link"
                    className="cursor-pointer"
                  ></img>
                  Q3 Financial Overview
                </div>
                <img
                  src={CircleArrow}
                  alt="refresh"
                  className="cursor-pointer"
                ></img>
              </div>
            </th>
            <th
              colSpan={1}
              className="bg-[#FFFFFF] h-[32px]  text-left pl-[8px] pr-[4px]"
            ></th>
            <th colSpan={1} className="bg-[#D2E0D4] h-[32px]">
              <div className="flex font-[500] text-[14px] text-[#505450] justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-[4px] h-[24px] w-[81px]">
                  <img src={GreyArrowSplit}></img>
                  ABC
                  <img src={GreyThreeDots} className="cursor-pointer"></img>
                </div>
              </div>
            </th>
            <th
              colSpan={2}
              className="bg-[#DCCFFC] h-[32px]  text-left pl-[8px] pr-[4px]"
            >
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row gap-[4px] px-[4px] text-[14px] font-[500] text-[#463E59]">
                  <img src={WhiteArrowSplit}></img>
                  Answer a question
                  <img src={GreyThreeDots} className="cursor-pointer"></img>
                </div>
              </div>
            </th>
            <th
              colSpan={1}
              className="bg-[#FAC2AF] h-[32px]  text-left pl-[8px] pr-[4px]"
            >
              <div className="flex flex-row justify-center items-center">
                <div className="flex flex-row gap-[4px] px-[4px] text-[14px] font-[500] text-[#695149]">
                  <img src={WhiteArrowSplit}></img>
                  Extract
                  <img src={GreyThreeDots} className="cursor-pointer"></img>
                </div>
              </div>
            </th>
            <th
              colSpan={1}
              className="bg-[#EEEEEE] h-[32px] text-left pl-[8px] pr-[4px] cursor-pointer hover:bg-[#d7d7d7]"
            >
              <div className="flex flex-row justify-center items-center">
                <img src={PlusSymbol}></img>
              </div>
            </th>
          </tr>
          <tr>
            <th className=" bg-[#EEEEEE] h-[32px] w-[32px]">
              <img
                src={Hash}
                alt="serial number"
                className="h-[13.34px] w-[13.33px] flex justify-self-center"
              />
            </th>
            <th className="bg-[#EEEEEE] h-[32px] w-[256px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px] w-[220px]">
                  <img src={JobRequestLogo}></img>
                  Job Request
                </div>
                <img src={DownChevron} className="cursor-pointer"></img>
              </div>
            </th>
            <th className="bg-[#EEEEEE] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center justify-between gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px]">
                  <img src={Calender}></img>
                  Submitted
                </div>
                <img src={DownChevron} className="cursor-pointer"></img>
              </div>
            </th>
            <th className="bg-[#EEEEEE] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center justify-between gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px]">
                  <img
                    src={CircledChevron}
                    className="h-[13.33px] w-[13.33px]"
                  ></img>
                  Status
                </div>
                <img src={DownChevron} className="cursor-pointer"></img>
              </div>
            </th>
            <th className="bg-[#EEEEEE] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center justify-between gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px]">
                  <img src={Person}></img>
                  Submitter
                </div>
                <img src={DownChevron} className="cursor-pointer"></img>
              </div>
            </th>
            <th className="bg-[#EEEEEE] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center justify-between gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px]">
                  <img src={URL}></img>
                  URL
                </div>
                <img src={DownChevron} className="cursor-pointer"></img>
              </div>
            </th>
            <th className="bg-[#E8F0E9] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]">
              <div className="flex flex-row items-center justify-between gap-[4px] pl-[8px] pr-[4px]">
                <div className="flex flex-row items-center gap-[4px] h-[16px] text-[#666C66]">
                  <img src={Emoji}></img>
                  Assigned
                </div>
              </div>
            </th>
            <th className="bg-[#EAE3FC] h-[32px] w-[125px] text-left pl-[8px] pr-[4px] text-[#655C80]">
              Priority
            </th>
            <th className="bg-[#EAE3FC] h-[32px] w-[125px] text-left pl-[8px] pr-[4px] text-[#655C80]">
              Due Date
            </th>
            <th className="bg-[#FFE9E0] h-[32px] w-[124px] text-left pl-[8px] pr-[4px] text-[#8C6C62]">
              Est. Value
            </th>
            <th className="bg-[#FFFFFF] h-[32px] w-[124px] text-left pl-[8px] pr-[4px]"></th>
          </tr>
        </thead>

        <tbody>
          {(data as JobData[]).map((item, index) => (
            <tr key={index}>
              <td className=" bg-[#FFFFFF] text-center h-[32px] w-[32px] font-[400] text-[#757575] text-[14px] pl-[8px] pr-[4px]">
                {item.id}
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[256px] font-[400] text-[#121212] text-[12px] pl-[8px] pr-[4px]">
                {item.jobRequest}
              </td>
              <td className="bg-[#FFFFFF] text-right h-[32px] w-[124px] font-[400] text-[#121212] text-[12px] pl-[8px] pr-[8px]">
                {item.submitted}
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[124px] text-[#121212] text-[12px] pl-[8px] pr-[4px]">
                <div
                  className="flex justify-self-center items-center rounded-[100px] font-[500] px-[8px] py-[4px] w-fit"
                  style={{
                    backgroundColor: statusColor[item.status]?.bg ?? "#FFFFFF",
                    color:
                      statusColor[item.status]?.["text-color"] ?? "#FFFFFF",
                  }}
                >
                  {item.status}
                </div>
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[124px] font-[400] text-[#121212] text-[12px] pl-[8px] pr-[4px]">
                {item.submitter}
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[124px] font-[400] text-[#121212] text-[12px] underline pl-[8px] pr-[4px]">
                <a
                  href={`https://${item.url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {item.url.length > 15
                    ? item.url.slice(0, 14) + "..."
                    : item.url}
                </a>
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[124px] font-[400] text-[#121212] text-[12px] pl-[8px] pr-[4px]">
                {item.assigned}
              </td>
              <td
                className="bg-[#FFFFFF] h-[32px] w-[125px] font-[600] text-center text-[12px] pl-[8px] pr-[4px]"
                style={{
                  color:
                    priorityColor[item.priority as keyof PriorityColor] ??
                    "#121212",
                }}
              >
                {item.priority}
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[125px] text-right font-[400] text-[#121212] text-[12px] pl-[8px] pr-[8px]">
                {item.dueDate}
              </td>
              <td className="bg-[#FFFFFF] h-[32px] w-[124px] text-right font-[400] text-[#121212] text-[12px] pl-[8px] pr-[8px] ">
                {item.estValue && (
                  <span>
                    {item.estValue} <span className="text-[#AFAFAF]">₹</span>
                  </span>
                )}
              </td>
              <td className="relative bg-[#FFFFFF] h-[32px] w-[124px] text-right font-[400] text-[#121212] text-[12px]">
                <div
                  className="z-20 absolute h-full w-[1px]"
                  style={{
                    top: "-64px",
                    bottom: "-64px",
                    left: "-1px",
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, #BDBDBD 0 4px, transparent 4px 10px)",
                  }}
                ></div>
                <div
                  className="absolute h-full w-[1px]"
                  style={{
                    top: "-64px",
                    right: "-1px",
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, #BDBDBD 0 4px, transparent 4px 10px)",
                  }}
                ></div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SpreadsheetTable;
