import './individualPost.css';
import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
import '../post/post.css'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getSingleSubredditPosts } from '../post/postAPI';
import { GetPosts } from '../postComments/postComments';
export  function IndividualPost(){
    let params = useParams();

    const [loading, setLoading] = useState(true);
    const [postContent, setPostContent] = useState({});
    useEffect(() => {
        getSingleSubredditPosts('r/'+ params.subredditId,params.commentId).then(results=>{
            setPostContent(results);
            setLoading(false);
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
        
        let obj = postContent;
            return (
                <div key={obj.display_name} className='postCard' id={obj.id}>
                    <div className='postInfoTop'>
                        
                        <img id={obj.id} className='iconSub'src={obj.thumbnail ||
                    `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`} onError={(e) => e.target.src = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'} />
                        <h3>{obj.subreddit_name_prefixed}</h3>
                        <p>Posted by: u/{obj.author} {roundTime(obj.created_utc)} ago</p>
                    </div>
                    <div class='textPost'>

                    
                        <h4 id={obj.id}>{obj.title}</h4>
                        <p>{obj.selftext}</p>
                     </div>
                    {obj.post_hint==='image'?<img id={obj.id} className='postImg' src={obj.url_overridden_by_dest||obj.url}/>:<div/>}
                    
                    
                    <a>Comments</a>
                    <a>Details</a>
                    <a>Share</a>
                    <p>{obj.ups}</p>
                    <GetPosts permalink={obj.permalink}/>
                </div>
            )
        
    }
    function loadingData(){
            let arr =['1']
            
            
            return arr.map(obj=>{
                
                return (
                    <div key={obj[0]} className='postCard' id={obj.display_name}>
                        <div className='postInfoTop'>
                            <img className='iconSub'src={`https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <h3>Loading...</h3>
                            <p>Loading...</p>
                        </div>
                        <div className='textPost'>

                        
                            <h4>Loading...</h4>
                            <p>Loading...</p>
                        </div>
                        
                        
                    </div>
                )
            })
            
        }
    
    return(
        <div>
            
                <div className="postContainer">
                    {loading?loadingData():loadData()}
                </div>
    
        </div>

    )

}
