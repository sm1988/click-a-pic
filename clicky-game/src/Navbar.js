import React from "react";

function Navbar(props) {
    return (
        <header className="container fixed-top" >
            <div className="row">
                <h1 className="col-sm-8">Fun With Flags</h1>
                <nav className="col-sm-4">
                    <p>Score: <span>{props.currentScore}</span></p>
                    <p>Top Score: <span>{props.highScore}</span> </p>
                    {props.children}
                </nav>
            </div>
        </header>        
    )
}

export default Navbar;