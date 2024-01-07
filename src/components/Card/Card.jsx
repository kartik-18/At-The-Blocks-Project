import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";

// parent Card

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
  const Png = param.png;
  return (
    <motion.div
      // className="CompactCard"
      className="flex rounded-xl h-[7rem !important] text-white p-4 relative cursor-pointer hover:!shadow-none"
      // className="flex flex-1 h-28 rounded-xl text-white p-4 relative cursor-pointer	"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <div className="flex flex-1 1 flex-col justify-end gap-4">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span className="text-[17px] font-bold ">{param.title}</span>
      </div>
      <div className="flex flex-1 flex-col items-end justify-between ">
        <Png />
        <span className="text-[1.5rem] font-bold">${param.value}</span>
        <span className="text-[0.75rem]">Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      chart: {
        type: "area",
        height: "auto",
      },

      dropShadow: {
        enabled: false,
        enabledOnSeries: undefined,
        top: 0,
        left: 0,
        blur: 3,
        color: "#000",
        opacity: 0.35,
      },

      fill: {
        colors: ["#fff"],
        type: "gradient",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
        colors: ["white"],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
      grid: {
        show: true,
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
    },
  };

  return (
    <motion.div
    // expaned
      className="absolute w-3/5 h-[70vh] z-10 left-52 rounded-2xl flex flex-col items-center justify-between p-4 xl:top-[2rem] xl:h-[45vh] xl:left-[6rem] md:top-[8rem] md:h-[50%] md:left-[25px] md:w-[80%]"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
        <span className="text-white text-2xl font-bold shadow[0px_0px_15px_white]">{param.title}</span>
      <div className="w-[70%]">
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span className="text-[#ececec] text-base">Last 24 hours</span>
    </motion.div>
  );
}

export default Card;