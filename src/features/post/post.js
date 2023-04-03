import React, { useEffect, useState } from 'react';
import { Route } from 'react-router-dom';
import { selectPost } from './postSlice';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
import './post.css'
import { useDispatch } from 'react-redux';
import { addPost } from './postSlice';
import { useParams } from 'react-router-dom';
import { getSubredditPosts } from './postAPI';
export  function Post(){
    const [postContent, setPostContent] = useState({});
    const [loading, setLoading] = useState(true);
    const params = useParams();
    let dispatch = useDispatch()
    
    let path = params.subredditId ===undefined && params.filterName===undefined?'':params.subredditId?'r/'+params.subredditId:params.filterName
    useEffect(() => {
        getSubredditPosts(path).then(results=>{
            setPostContent(results);
            setLoading(false);
            dispatch(addPost(results))
        })
        
    },[params.subredditId])
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
             let id = obj.subreddit_name_prefixed.substr(2) + '/' + obj.id
             if(!obj.over_18){
                return (
                    <div key={obj.display_name} className='postCard' id={id} onClick={() => window.location.href = `/subreddit/${obj.subreddit_name_prefixed.substr(2)}/${obj.id}` }>
                        <div id={id} className='postInfoTop'>
                        <div className='footerPost'>
                            <img id={id} className='iconSub'src={obj.thumbnail ||
                        `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`} onError={(e) => e.target.src = 'https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg'} />
                            <h3 id={id}><a href={`/subreddit/${obj.subreddit_name_prefixed.substr(2)}`}>{obj.subreddit_name_prefixed}</a></h3>
                            <p id={id}>Posted by: u/{obj.author} {roundTime(obj.created_utc)} ago</p>
                        </div>
                        
                            <div id={id} class='textPost'>
                                <h4 id={id}>{obj.title}</h4>
                                <p id={id}>{obj.selftext}</p>
                            </div>
                        
                            {obj.post_hint==='image'?<img id={id} className='postImg' src={obj.url_overridden_by_dest||obj.url}/>:<div/>}
                        <br />
                        
                            <a>Comments</a>
                            <a>Details</a>
                            <a>Share</a>
                            <a>{obj.ups}</a>
                        </div>
                    </div>
                )
                            }
        })
    }
    function loadingData(){
            let arr =[]
            for(let i =0;i<10;i++){
                arr.push(i)
            }
            
            return arr.map(obj=>{
                
                return (
                    <div key={obj} className='postCard'>
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
