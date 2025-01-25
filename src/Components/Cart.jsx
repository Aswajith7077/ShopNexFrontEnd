import React, { useState,useEffect } from "react";
import NavBar from "./NavBar";
import { api } from "../api/api";
import { useAuth } from "../auth/AuthContext";

const Cart = () => {
  const auth = useAuth();
  const [cartItems, setCartItems] = useState();

  const getCartItems = async () => {
    api
      .get("/cart", {
        params: {
          USER_ID: auth.user.name
        }
      })
      .then((response) => {
        setCartItems(response.data);
      }).catch(error=>{
        console.log(error)
      });
  };

  useEffect(() => {
    getCartItems();
  }, []);

  return (
    <div className="flex flex-col">
      <NavBar />
      <div className="flex flex-row">
        {/* <h1></h1> */}
        <div className="flex flex-col">
          {cartItems?.map((value, key) => {
            console.log(value);
            // return <div key={key} className="flex flex-row">
            //   <img src=""></img>
            //   <h1></h1>
            // </div>;
          })}
        </div>
      </div>
    </div>
  );
};

export default Cart;
