import React from "react";
import './Table.css';
import Square from "./Square";

const Table = ({squares, click}) => {
    return (
        <div className="table">
            {
                squares.map((sqare, i) => (
                    <Square key={i} value={sqare} Click={() => click(i)} />
                ))
            }
        </div>
    )
}

export default Table