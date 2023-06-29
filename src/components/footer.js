import React from "react";
import "./footer.css"

function Footer() {
  const myDate = new Date().getFullYear();
  return(
    <div className="footer">
      <h5>Made With <span>💙</span> By Carlo &#169; {myDate}</h5>
    </div>
  )
}

export default Footer;