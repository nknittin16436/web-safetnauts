import React from "react";
import { useSearchParams } from "react-router-dom";

const RegistrationNumberDisplay = () => {
  // Use the useSearchParams hook to access query parameters
  const [searchParams] = useSearchParams();
  const regNo = searchParams.get("regNo"); // Extract the 'regNo' parameter

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#F5F5F5",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#FFFFFF",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          textAlign: "center",
        }}
      >
        <h1 style={{ color: "#1A2A3A", marginBottom: "20px" }}>
          Accused Vehicle Details
        </h1>
        <div
          style={{
            backgroundColor: "#F5F5F5",
            padding: "20px",
            borderRadius: "4px",
            border: "2px solid #1A2A3A",
          }}
        >
          <p style={{ color: "#1A2A3A", fontSize: "32px", fontWeight: "bold" }}>
            {regNo || "No Registration Number Found"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegistrationNumberDisplay;
