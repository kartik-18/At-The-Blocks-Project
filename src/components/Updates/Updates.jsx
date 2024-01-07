import React from "react";
import "./Updates.css";
import { UpdatesData } from "../../Data/Data";

const Updates = () => {
  return (
    <div className="w-[95%] h-[85%] bg-white rounded-xl mt-3 p-4 gap-4 flex flex-col text-[13px] tracking-normal leading-4	">
      {UpdatesData.map((update) => {
        return (
          <div className="flex gap-2">
            <img className="w-[3.2rem] h-[3.2rem]" src={update.img} alt="profile" />
            <div className="noti">
              <div  style={{marginBottom: '0.5rem'}}>
                <span className="font-bold">{update.name}</span>
                <span > {update.noti}</span>
              </div>
                <span>{update.time}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Updates;