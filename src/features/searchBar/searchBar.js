import React, { useEffect } from "react";
import { setSearchTerm } from "./seachSlice";
import { getSearchTerm } from "./seachSlice";
import { useDispatch } from "react-redux";
import { fetchSearchResults } from "../post/postAPI";
import { useState } from "react";
import { useSelector } from "react-redux";

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
    return(<div>
                <input type='text' onChange={handleChange} value={searchContent} onKeyPress={handleKeyPress} placeholder='Search...'/>
                {!loading?data[0]===undefined?<div>   
                    
                </div>:data.map(obj=>{
                    
                    return(
                    <div className='postCard' onClick={()=>{window.location.pathname = `/subreddit/${obj.data.subreddit}/${obj.data.id}`}}>
                        <a href={`/subreddit/${obj.data.subreddit}`}>{obj.data.subreddit}</a>
                        <h1>{obj.data.title}</h1>
                    </div>)
                    })
                :<h1>Searching,hang on...</h1>}
           </div>
    )
}