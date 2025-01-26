import React,{ useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartCard from "./CartCard";
import { api } from "../api/api";
import NavBar from "./NavBar";

const getSearchItems = (items, setItems) => {
  api.get("/searchitems")
		.then(response => {
      console.log(response.data);
			setItems(response.data);
      console.log(items)
		})
		.catch(err => {
			console.log('Searching Failed',err)
		});
};

const SearchPage = () => {
  const state = useLocation();
  const [items, setItems] = useState([]);

  console.log(state.state);
	useEffect(() => {
		getSearchItems(items,setItems);
    console.log(items)
	},[]);



  return (
    <div>
			<NavBar />
      <div className="py-[10%]">
        <h1 className="font-[lato] font-semibold text-xl">{`Results for ${state.state.searchText}`}</h1>
        
      </div>
    </div>
  );
};

export default SearchPage;
