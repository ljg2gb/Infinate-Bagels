import React from "react";

export default function Form() {
    return (
        <div>
            <h2>Bagels Form</h2>
            <form onSubmit={console.log} >
                <input placeholder="New Bagel"></input>
                <input placeholder="Bagel Rating"></input>
                <button>Submit</button>
            </form>
        </div>

    )
}