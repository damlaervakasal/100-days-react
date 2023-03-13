import React from "react";

function Header({ number }) {
  console.log("Header Component Re-rendered");
  return (
    <div>
      {" "}
      {number} - Header - {number}
    </div>
  );
}

export default React.memo(Header);
