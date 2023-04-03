import React, { useEffect } from "react";
import { setSearchTerm } from "./seachSlice";
import { getSearchTerm } from "./seachSlice";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../post/postAPI";
import { useState } from "react";
import { useSelector } from "react-redux";
import './searchBar.css'
export function SearchBar(props){
    const [loading, setLoading] = useState(false);
    const [searchContent, setSearchContent] = useState('');
    let data =useSelector(state => state.search.searches)
    
    useEffect(()=>{
        props.onSearch(searchContent);
    },[searchContent])
    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            e.preventDefault();
            props.onSearch(searchContent);
            setSearchContent('');
            setLoading(false);
            //window.location.path = '/results/'
        };
    }
    function handleChange(e){
        setSearchContent(e.target.value)

        setLoading(false);
  
    }
    return(
        <div className="searchBarFullContainer">
                <input className='searchBarInput'type='text' onChange={handleChange} value={searchContent} onKeyPress={handleKeyPress} placeholder='Search...'/>
                {!loading?data[0]===undefined?<div>   
                  
                </div>:<div className="scrollContainer">
                    {data.map(obj=>{
                    
                    return(
                    <div className='searchBoxContainer' onClick={()=>{window.location.pathname = `/subreddit/${obj.data.subreddit}/${obj.data.id}`}}>
                        <div className="boxForHeading">
                            <img src={obj.data.thumbnail ||
                        `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`} onError={(e) => e.target.src = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'}/>
                            <a href={`/subreddit/${obj.data.subreddit}`}>{obj.data.subreddit}</a>
                        </div>
                        <h1>{obj.data.title}</h1>
                    </div>)
                    })
                }
                </div>:<h1>Searching,hang on...</h1>}
           </div>
    )
}