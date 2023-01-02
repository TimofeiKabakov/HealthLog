import React from 'react';
import CaloriesCard from './CaloriesCard/CaloriesCard';
import MacrosCard from './MacrosCard/MacrosCard';
import NutritionCard from './NutrtionCard/NutritionCard';
import DashboardCard from './DashboardCard/DashboardCard';

const cardMap = {
  Calories: (props) => <CaloriesCard {...props} />,
  Macros: (props) => <MacrosCard {...props} />,
  Nutritions: (props) => <NutritionCard {...props} />,
  DashBoard: (props) => <DashboardCard {...props}/>
};

function MainCard(props) {
  const Card = cardMap[props.cardType];
  if (!Card) {
    return <div>Invalid card type</div>;
  }
  return <Card {...props} />;
}

export default MainCard