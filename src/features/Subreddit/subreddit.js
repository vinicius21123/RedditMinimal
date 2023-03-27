import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
export  function Subreddit(props){
    let loading = props.loading;

   // let  {postState} = props.postsObj;

    function loadData(){
        let data = props.data
        let arr =[]
        for(let i =0;i<data.length;i++){
            arr.push(data[i])
            
            
        }
        return arr.map(obj=>{
            return (
                <div className='subredditCard'>
                    <img className='iconSub'src={obj.icon_img ||
                  `https://api.adorable.io/avatars/25/${obj.display_name}`}/>
                    <p>{obj.url}</p>
                    <img className='bannerSub'src={obj.banner_img}/>
                    <p>{obj.public_description}</p>
                    <p>{obj.title}</p>
                    <button>{obj.subscribers} subscribers</button>
                </div>
            )
        })
    }
    return(
        <div>
            
                <div className="postContainer">
                    {loading?'Loading....':loadData()}
                </div>
    
        </div>

    )


}
