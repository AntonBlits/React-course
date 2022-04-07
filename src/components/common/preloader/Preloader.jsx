import React from "react";
import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
   return <div style={{ width: "300px" }}>
      <img src={preloader} style={{ width: "100%" }} />
   </div>
}

export default Preloader;