import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { selectPost } from './postSlice';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
import './post.css'
export  function Post(props){


    let loading = props.loading;
    let data = props.data
    

    function loadData(){
        let arr =[]
        for(let i =0;i<data.length;i++){
            arr.push(data[i])
            
            
        }
        
        return arr.map(obj=>{
             
            return (
                <div className='postCard' id={obj.display_name} onClick={props.clickHandler}>
                    <div className='postInfoTop'>
                        <img id={obj.display_name} className='iconSub'src={obj.thumbnail ||
                    `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                        <h3>{obj.subreddit_name_prefixed}</h3>
                        <p>Posted by: u/{obj.author}</p>
                    </div>
                    <div class='textPost'>

                    
                        <h4 id={obj.display_name}>{obj.title}</h4>
                        <p>{obj.selftext}</p>
                     </div>
                    <img id={obj.display_name} className='postImg' src={obj.url||obj.url_overridden_by_dest}/>
                    <a>Comments</a>
                    <a>Details</a>
                    <a>Share</a>
                    <p>{obj.ups}</p>
                </div>
            )
        })
    }
    function loadingData(){
            let arr =[]
            for(let i =0;i<10;i++){
                arr.push(i)
            }
            
            return arr.map(obj=>{
                
                return (
                    <div className='postCard' id={obj.display_name}>
                        <div className='postInfoTop'>
                            <img className='iconSub'src={`https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <h3>Loading...</h3>
                            <p>Loading...</p>
                        </div>
                        <div class='textPost'>

                        
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
