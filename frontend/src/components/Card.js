import React from "react";
import CardOutCardCSS from "./CardOutCard.module.css";

export const Card = (props) => {
  return (
    <div className={CardOutCardCSS.CompactCard}>
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
