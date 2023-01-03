import React, { useState } from "react";
import SidebarCSS from "./Sidebar.module.scss";
import Logo from "../../imgs/logo.png";
import { UilSignOutAlt } from "@iconscout/react-unicons";
import { SidebarData } from "../../Data/Data";
import { UilBars } from "@iconscout/react-unicons";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Sidebar = (props) => {
  const [expanded, setExpaned] = useState(true);

  const sidebarVariants = {
    true: {
      left: "0",
    },
    false: {
      left: "-60%",
    },
  };

  return (
    <div className={SidebarCSS.container}>
      <div
        className={SidebarCSS.bars}
        style={expanded ? { left: "60%" } : { left: "5%" }}
        onClick={() => setExpaned(!expanded)}
      >
        <UilBars style={{ color: "white" }} />
      </div>
      {/* logo */}
      <div className={SidebarCSS.logo}>
        <img src={Logo} alt="logo" />
        <span>
          Sh<span>o</span>ps
        </span>
      </div>
      <motion.div
        className={SidebarCSS.sidebar}
        variants={sidebarVariants}
        animate={window.innerWidth <= 768 ? `${expanded}` : ""}
      >
        <div className={SidebarCSS.menu}>
          {SidebarData.map((item, index) => {
            return (
              <Link
                to={item.path}
                className={
                  props.selectedIndex === index
                    ? `${SidebarCSS.menuItem} ${SidebarCSS.active}`
                    : SidebarCSS.menuItem
                }
                key={index}
              >
                <item.icon style={{ color: "white" }} />
                <span style={{ color: "white" }}>{item.heading}</span>
              </Link>
            );
          })}
          {/* signoutIcon */}
          <a href="/logout" className={SidebarCSS.menuItem}>
            <UilSignOutAlt style={{ color: "white" }} />
            <span style={{ color: "white" }}>Logout</span>
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Sidebar;
