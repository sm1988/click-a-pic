import React from "react";

function Jumbotron(props) {
  return (
    <div className="jumbotron">
      <div className="container container-fluid">{props.children}
        <p className="lead">Get points by clicking on a flag but don't click on any more than once!</p>
      </div>
    </div>
  )
}

export default Jumbotron;