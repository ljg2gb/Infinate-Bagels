import React from "react";
import Bagel from './Bagel'

function Container(props) {

    const renderBagels = props.bagels.map(bagel => <Bagel key={bagel.id} rating={bagel.rating} type={bagel.type}/>);

    return (
        <ul>
            <h3>Bagels List Container</h3>
            {renderBagels}
        </ul>
    )
}

export default Container;