import React,{ useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import CartCard from "./CartCard";
import { api } from "../api/api";
import NavBar from "./NavBar";

const getSearchItems = (items, setItems) => {
  api.get("/searchitems")
		.then(response => {
			setItems(response.data);
		})
		.catch(err => {
			console.log('Searching Failed',err)
		});
};

const SearchPage = () => {
  const state = useLocation();
  const [items, setItems] = useState([]);

	useEffect(() => {
		getSearchItems(items,setItems);
	},[]);

  return (
    <div>
			<NavBar />
      <div>
        <h1>{`Results for ${state.searchText}`}</h1>
      </div>
    </div>
  );
};

export default SearchPage;
