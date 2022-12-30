import React from 'react'

const FoodCart = (props) => {
  return (
    <div>
			{props.meal.length > 0 && (
				<ul>
					{props.meal.map((food) => (
						<li key={food.info.id}>{food.amount} x {food.info.name}</li>
					))}
				</ul>
			)}
			<button onClick={props.handleAddMeal()}>Add Meal</button>
    </div>
  )
}

export default FoodCart