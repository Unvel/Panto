import React, {useEffect, useState} from 'react';
import data1 from '../assets/data/chairs'
import data2 from '../assets/data/beds'
import data3 from '../assets/data/sofas'
import data4 from '../assets/data/lamps'
import searchButton from "../assets/images/searchButton.png";
import {Link} from "react-router-dom";

const SearchBar = () => {

    const data = data1.concat(data2, data3, data4)
    const [searchTerm, setSearchTerm]= useState('')
    const [furnitureList, setFurnitureList] = useState(data)

    const filterArray = (searchText, list) => {
        return list.filter(({title}) => title.toLowerCase().includes(searchText.toLowerCase()))
    }

    useEffect (() => {
        const filteredArray = filterArray(searchTerm, data)
        setFurnitureList(filteredArray)
    },[searchTerm])

    return (
        <div className={"searchBar"}>
            <div><input
                type="search"
                name="searchBarInput"
                placeholder={"Search for furniture"}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="banner__searchBar"/>

                <img src={searchButton} alt="search" className="banner__searchButton"/></div>
            <div>
                <ul className="searchBar__itemList">
                    {furnitureList.map((item)=> {
                        if(searchTerm.length > 2) return <li className="searchBar__item" key={item.id}><Link to={`furniture/${item.category}/${item.id}`}>{item.title}</Link></li>
                    })}
                </ul>
            </div>
        </div>

    );
};

export default SearchBar;