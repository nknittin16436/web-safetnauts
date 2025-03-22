import React from "react";
import { useLocation } from "react-router-dom";

const Home = () => {
  // Use the useLocation hook to get the current location object
  const location = useLocation();

  // Function to parse query parameters
  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    const paramsObject = {};

    // Iterate over all query parameters and add them to the paramsObject
    for (const [key, value] of params.entries()) {
      paramsObject[key] = value;
    }

    return paramsObject;
  };

  // Get the query parameters
  const queryParams = getQueryParams();
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>Responsible Party Details</h1>
      {Object.keys(queryParams).length > 0 ? (
        <ul>
          {Object.entries(queryParams).map(([key, value]) => (
            <li key={key}>
              <strong>{key}:</strong> {value}
            </li>
          ))}
        </ul>
      ) : (
        <p>No query parameters found.</p>
      )}
    </div>
  );
};

export default Home;
