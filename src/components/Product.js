import React from "react";


function Product({bagTitle, image, itemPrice,itemType}){
    return (
        <article>
            <span>{itemType}</span>
            <img src={image} alt="plaatje van een tas"/>
            <p>The {bagTitle} bag</p>
            <h4>€{itemPrice},-</h4>
        </article>
    );
}

export default Product;
