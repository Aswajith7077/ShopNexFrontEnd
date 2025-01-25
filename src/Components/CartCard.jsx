import React from "react";

const CartCard = ({ product }) => {

	const l = [];
	for (var i = 0; i < 5; i++) l.push(Math.max(product.rating - i, 0));


  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <h2>{product.price}</h2>

      <div className="flex flex-row mx-2 ">
        {l.map((value, key) => {
          return value >= 1 ? (
            <FaStar key={key} size={24} className="mx-1" />
          ) : 0 < l[key] < 1 ? (
            <FaRegStar key={key} size={24} className="mx-1" />
          ) : (
            <FaStarHalfAlt key={key} size={24} className="mx-1" />
          );
        })}
      </div>
			<h3>{product.rating}</h3>
    </div>
  );
};

export default CartCard;
