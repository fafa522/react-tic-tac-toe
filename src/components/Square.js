import React from "react";

import './Square.css'

const Square = (props) => {

    return (
        <button className="square" onClick={props.Click}>{props.value}</button>
    )
}

export default Square