import React from 'react';
import { useNavigate } from "react-router-dom";

const LogoutButton = () => {
	const navigate = useNavigate();

	const handleLogout = async () => {
		await fetch('/users/logout');
		navigate("/users/login");
	}

  return (
		<button onClick={handleLogout}>Logout</button>
  )
}

export default LogoutButton