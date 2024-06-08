import React, { useState } from "react";
import LoginForm from "../../forms/LoginForm";
import { checkCredentials } from "../../../services/api";
import { useNavigation } from "../../../services/navigationContext";
import "./LoginPage.css";

const LoginPage = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { navigateTo } = useNavigation();

  const handleLogin = async (credentials) => {
    setLoading(true);
    setError(null);

    const user = await checkCredentials(
      credentials.email,
      credentials.password
    );

    setLoading(false);

    if (user) {
      if (user.role === "admin") {
        navigateTo("admin", user);
      } else {
        navigateTo("vote", user);
      }
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="login-page">
      <LoginForm onSubmit={handleLogin} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
};

export default LoginPage;
