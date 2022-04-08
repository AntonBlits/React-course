import React from "react";
import preloader from "../../../assets/images/preloader.gif";

const Preloader = () => {
   return <div style={{ width: "300px", position: "absolute", top: "50%", left: "50%" }}>
      <img src={preloader} style={{ width: "100%" }} />
   </div>
}

export default Preloader;