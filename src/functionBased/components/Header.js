import React from "react";

function Header() {
  const headerStyle = {
    padding: "20px 0",
    lineHeight: "1.5rem",
  };
  return (
    <header style={headerStyle}>
      <h1
        style={{
          fontSize: "6rem",
          fontWeight: "600",
          marginBottom: "3rem",
          lineHeight: "1rem",
          color: "#900C3F",
          textTransform: "lowercase",
          textAlign: "center",
        }}
      >
        Todos
      </h1>
    </header>
  );
}

export default Header;
