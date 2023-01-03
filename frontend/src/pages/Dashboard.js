import DashboardCSS from "./Dashboard.module.scss";
import MainDash from "../components/MainDash/MainDash";
import RightSide from "../components/RightSide/RightSide";
import Sidebar from "../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className={DashboardCSS.Dashboard}>
      <div className={DashboardCSS.DashboardGlass}>
        <Sidebar selectedIndex={0} />
        <MainDash />
        <RightSide />
      </div>
    </div>
  );
}

export default Dashboard;
