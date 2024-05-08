import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Page Not Found</h1>
      <p>
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <Link to="/">Go to Home Page</Link>
    </div>
  );
};

export default NotFoundPage;
