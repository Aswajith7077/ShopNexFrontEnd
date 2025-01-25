import React,{ useState } from "react";
import { useLocation } from "react-router-dom";
import CartCard from "./CartCard";
import { api } from "../api/api";
import NavBar from "./NavBar";

const getSearchItems = (items, setItems) => {
  api.get("/searchitems");
};

const SearchPage = () => {
  const state = useLocation();
  const [items, setItems] = useState([]);

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
