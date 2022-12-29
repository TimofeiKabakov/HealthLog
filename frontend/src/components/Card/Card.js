import React, { useState } from "react";
import { AnimateSharedLayout, motion } from "framer-motion";
import { Link } from 'react-router-dom'

// import { CircularProgressbar } from 'react-circular-progressbar';
// import 'react-circular-progressbar/dist/styles.css';
import "./Card.css";
import { UilTimes } from "@iconscout/react-unicons";

export const Card = (props) => {
  const [expanded, setExpanded] = useState(false)

  return (

      <AnimateSharedLayout>
          {
              expanded? 
                  <ExpandedCard param={props} setExpanded={()=>setExpanded(false)}/>:
              <CompactCard param = {props} setExpanded={()=>setExpanded(true)}/>
          }
      </AnimateSharedLayout>
  )
};

// CompactCard

function CompactCard({ param, setExpanded }) {
  return (
    <motion.div className="CompactCard"
        onClick={()=>{console.log("papa")}}
        layoutId='expandableCard'
        >
      <img
        src={`${param.image}`}
        style={{
          borderRadius: 15,
          width: "100%",
          height: undefined,
          aspectRatio: 1,
        }}
      />
      <div className="containerInfo">
        <div style={{ color: "black", fontWeight: "bold", opacity: 1 }}>
          {param.name}
          {/* <div>{props.description}</div> */}
        </div>
      </div>
    </motion.div>
);
}

// ExpandedCard

function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
        chart: {
            type: 'area',
            height: 'auto',
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
            color: ["#fff"],
            type: "gradient",

        },
        dataLabels: {
            enabled: false,
        },
        stroke: {
            curve: "smooth",
            colors: ["white"]
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        },
        grid: {
            show: true,
        },
        xavis: {
            type: "dataTime",
            categories: [
                "2018-19-19T00:00:00.000Z",
                "2018-19-19T01:00:00.000Z",
                "2018-19-19T02:00:00.000Z",
                "2018-19-19T03:00:00.000Z",
                "2018-19-19T04:00:00.000Z",
                "2018-19-19T05:00:00.000Z",
            ]
        },
    }
}
  return (
    <motion.div
    style={{
      background: param.color.backGround,
      boxShadow: param.color.boxShadow,
  }}
  layoutId='exppandableCard'
  >
  <div style={{alignSelf: 'flex-end', cursor: 'pointer', color: 'white'}}>
      <UilTimes onClick={setExpanded}/>
  </div>
  <span>{param.title}</span>
  <div className='chartContainer'>
  </div>
  <span>Last 24 hours</span>
      <span>Last 24 hours</span>
    </motion.div>
  );
}
