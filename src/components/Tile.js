import React from "react";


function Tile({image, altImage, title, children}) {

    return(
        <section>
            {image && <img src={image} alt={altImage}/>}
            <h2>{title}</h2>
            {children}
        </section>
    );
}

export default Tile;