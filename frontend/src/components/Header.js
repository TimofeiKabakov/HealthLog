import React from "react";
import { Link } from "react-router-dom";
import LogoutButton from "./LogoutButton";

const Header = () => {
  const pages = [
    { id: 1, label: "Home", url: "" },
    { id: 2, label: "Diet", url: "/diet" },
    { id: 3, label: "Training", url: "/training" },
  ];

  return (
    <div>
      <ul>
        {pages.map((page) => (
          <span key={page.id}>
            <Link to={page.url}> {page.label} </Link>
          </span>
        ))}
        <LogoutButton />
      </ul>
    </div>
  );
};

export default Header;
