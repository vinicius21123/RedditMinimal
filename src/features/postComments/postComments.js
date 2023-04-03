import React from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getPostComments } from "../post/postAPI";
import { addComment } from "./postCommentsSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import './postComments.css'
export function GetPosts(props){
    let dispatch = useDispatch()
    let params = useParams()
    const [postContent, setPostContent] = useState({});
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        getPostComments(props.permalink).then(results=>{
            setLoading(false)
            setPostContent(results);
            dispatch(addComment(results))
        })
        
    },[params])
    const roundTime = t => {
        var unixTimestamp = t;
        var data = new Date(unixTimestamp * 1000);
        var hours = data.getHours();
        if (hours >= 24) {
            return data.getDay() + ' days';
        } else if (hours >= 1) {
            return hours + ' hours';
        } else {
            return data.getMinutes() + ' minutes';
        }
    }
    function loadData(){
        let arr =[]
        for(let i =0;i<postContent.length;i++){
            arr.push(postContent[i])
            
            
        }
        return arr.map(obj=>{

            return (
                <div key={obj.id} className='postCommentCard' id={obj.id}>
                    
                    <div id={obj.id} class='textCommentPost'>
                        <p id={obj.id}><span>{obj.author} </span>{roundTime(obj.created_utc)} ago</p><br/>
                        <p id={obj.id}>{obj.body}</p>
                     </div>
                    
                    <p>{obj.ups}  Share</p>
                    
                </div>
            )
        })
    }
    
    return (
        <div className="commentContainer">{loading?<h2>loading...</h2>:loadData()}</div>)
    
    
    
}