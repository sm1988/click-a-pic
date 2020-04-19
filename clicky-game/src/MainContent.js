import React from "react";

function MainContent(props) {
  return (
    <div className="row">{props.children}
    <br/><br/>
    </div>

  )
}

export default MainContent;