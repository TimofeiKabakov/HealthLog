import React from "react";
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
  return (
    <a class="nav-link" href="/logout">
      <button>Logout</button>
    </a>
  );
};

export default LogoutButton;
