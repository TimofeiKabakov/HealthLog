import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import MacrosCardCSS from "./MacrosCard.module.scss";

// parent Card

const CaloriesCard = (props) => {
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
  return (
    <motion.div
      className={MacrosCardCSS.CompactCard}
      style={{
        background: "linear-gradient(180deg, #252849 0%, #2e325c 100%)",
        boxShadow: "0px 10px 20px 0px #2e325c",
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      <span style={{ fontSize: 16, fontWeight: "bold" }}>{param.title}</span>
      <div className={MacrosCardCSS.Container}>
        <div className={MacrosCardCSS.radialBar}>
          <span fontSize="2px">Carbs</span>
          <CircularProgressbar
            className={MacrosCardCSS.CircularProgressbar}
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>0</span>
        </div>
        <div className={MacrosCardCSS.radialBar}>
          <span fontSize="2px">Fat</span>
          <CircularProgressbar
            className={MacrosCardCSS.CircularProgressbar}
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>0</span>
        </div>
        <div className={MacrosCardCSS.radialBar}>
          <span fontSize="2px">Protein</span>
          <CircularProgressbar
            className={MacrosCardCSS.CircularProgressbar}
            value={param.barValue}
            text={`${param.barValue}%`}
          />
          <span>0</span>
        </div>
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
      className={MacrosCardCSS.ExpandedCard}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className={MacrosCardCSS.chartContainer}>
        <Chart options={data.options} series={param.series} type="area" />
      </div>
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default CaloriesCard;
