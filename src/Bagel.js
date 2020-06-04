import React from "react";

export default function Bagel(props) {
    return (
    <div>
        <h3>{props.type}</h3>
        <p>{props.rating}</p>
    </div>

    )
}