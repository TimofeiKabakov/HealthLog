import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import "./Card.css";
// import Chart from "react-apexcharts";
// import { UilTimes } from "@iconscout/react-unicons";

export const Card = (props) => {
  return (
    <div className="CompactCard">
      <img
        src={`${props.image}`}
        style={{
          borderRadius: 15,
          width: "100%",
          height: undefined,
          aspectRatio: 1,
        }}
      />
      <div
        style={{
          position: "absolute",
          width: "98%",
          height: 93,
          background: "white",
          opacity: 0.5,
          padding: 5,
          top: "35%",
        }}
      >
        <div style={{ color: "black", fontWeight: "bold", opacity: 1 }}>
          {props.name}
          {/* <div>{props.description}</div> */}
        </div>
      </div>
    </div>
  );
};

// CompactCard
// function CompactCard({ param }) {
//   return (
//     <motion.div
//       className="CompactCard"
//       //   style={{
//       //     background: param.color.backGround,
//       //     boxShadow: param.color.boxShadow,
//       //   }}
//       //   onClick={setExpanded}
//       //   layoutId="expandableCard"
//     >
//       {/* Card TO DO */}

//       <div>{param.name}</div>

//       {/* <div className="radialBar">
//         <CircularProgressbar
//           value={param.barValue}
//           text={`${param.barValue}\n${param.title}`}
//         />
//         <span>{param.title}</span>
//       </div>
//       <div className="detail">
//         <Png />
//         <span>${param.value}</span>
//         <span>Last 24 hours</span>
//       </div> */}
//     </motion.div>
//   );
// }

// ExpandedCard

// function ExpandedCard({ param, setExpanded }) {
//   const data = {
//     options: {
//       chart: {
//         type: "area",
//         height: "auto",
//       },
//       dropShadow: {
//         enabled: false,
//         enabledOnSeries: undefined,
//         top: 0,
//         left: 0,
//         blur: 3,
//         color: "#000",
//         opacity: 0.35,
//       },
//       fill: {
//         color: ["#fff"],
//         type: "gradient",
//       },
//       dataLabels: {
//         enabled: false,
//       },
//       stroke: {
//         curve: "smooth",
//         colors: ["white"],
//       },
//       tooltip: {
//         x: {
//           format: "dd/MM/yy HH:mm",
//         },
//       },
//       grid: {
//         show: true,
//       },
//       xavis: {
//         type: "dataTime",
//         categories: [
//           "2018-19-19T00:00:00.000Z",
//           "2018-19-19T01:00:00.000Z",
//           "2018-19-19T02:00:00.000Z",
//           "2018-19-19T03:00:00.000Z",
//           "2018-19-19T04:00:00.000Z",
//           "2018-19-19T05:00:00.000Z",
//         ],
//       },
//     },
//   };
//   return (
//     <motion.div
//       className="ExpandedCard"
//       style={{
//         background: param.color.backGround,
//         boxShadow: param.color.boxShadow,
//       }}
//       layoutId="exppandableCard"
//     >
//       <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
//         <UilTimes onClick={setExpanded} />
//       </div>
//       <span>{param.title}</span>
//       <div className="chartContainer">
//         <Chart series={param.series} type="area" options={data.options} />
//       </div>
//       <span>Last 24 hours</span>
//     </motion.div>
//   );
// }
