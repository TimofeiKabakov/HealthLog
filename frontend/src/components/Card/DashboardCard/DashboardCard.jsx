import React from 'react'
import DashboardCardCSS from './DashboardCard.module.scss'

const DashboardCard = () => {
  return (
    <div 
    style={{
        background:  "linear-gradient(180deg, #2e325c 0%, #252849 100%)",
        boxShadow: "0px 10px 20px 0px #2e325c",
      }}
    className={DashboardCardCSS.DashboardCard}>
        <div className={DashboardCardCSS.Image}>
            gey
        </div>
        <div className={DashboardCardCSS.detail}>
            Workout
        </div>
    </div>
  )
}

export default DashboardCard