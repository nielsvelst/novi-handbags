import React from "react";

function logClick({target:{value}}){
    console.log(value);
}
function NavButtons(props){

    return (
        <button
            type='button'
            value={props.buttonName}
            onClick={logClick}
            disabled={props.buttonOnOff}
        >
            {props.buttonName}
    </button>
    )
}

export default NavButtons;