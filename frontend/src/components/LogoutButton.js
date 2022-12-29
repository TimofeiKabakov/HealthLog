import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await fetch("/logout");
    navigate("/logout");
  };

  return <button onClick={handleLogout}>Logout</button>;
};

export default LogoutButton;
