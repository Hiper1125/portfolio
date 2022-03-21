import React, { useState } from "react";
import $ from "jquery";

const Overlay = () => {
  const [visible, setVisibile] = useState(false);

  $(document.body).on("click", ".project", () => {
    setVisibile(true);
  });

  return (
    <div
      className={`overlay w-full h-screen top-0 bg-black z-[100] selectDisable transition-opacity duration-300 ${
        visible ? "fixed opacity-60" : "fixed opacity-0 pointer-events-none"
      }`}
      onClick={() => {
        setVisibile(false);
      }}
    ></div>
  );
};

export default Overlay;
