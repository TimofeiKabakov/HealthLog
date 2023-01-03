import React from "react";
import "./Cards.css";
import { cardsData, dashboardcardsData } from "../../Data/Data";
import MainCard from "../Card/MainCard";


const Cards = (props) => {
  const { dataType } = props;
  const data = dataType === 'dashboard' ? dashboardcardsData : cardsData;
  console.log(data)
  return (
    <div className="Cards">
      {data.map((card, id) => {
        return (
          <div className="parentContainer" key={id}>
            <MainCard
              title={card.title}
              color={card.color}
              barValue={card.barValue}
              value={card.value}
              png={card.png}
              series={card.series}
              cardType={card.cardType}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Cards;