import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
export  function Subreddit(props){
    let loading = props.loading;
    let data = props.data

   // let  {postState} = props.postsObj;
   

    function loadData(){
        let arr =[]
        for(let i =0;i<data.length;i++){
            arr.push(data[i])
            
            
        }
        
        return arr.map(obj=>{
             
            return (
                <div className='subredditCard' id={obj.display_name} onClick={props.clickHandler}>
                    <img id={obj.display_name} className='iconSub'src={obj.icon_img ||
                  `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                    <p id={obj.display_name}>{obj.url}</p>
                    <img id={obj.display_name} className='bannerSub'src={obj.banner_img || 'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png'}/>
                    <button id={obj.display_name}>{obj.subscribers} subscribers</button>
                    <h2 id={obj.display_name}>{obj.title}</h2>
                    <p id={obj.display_name}>{obj.public_description || obj.description}</p>
                    <button id={obj.display_name} type="button">{'<< '}Browse Subreddit</button>
                </div>
            )
        })
        
    }
    return(
        <div>
            
                <div className="subContainer">
                    {loading?'Loading....':loadData()}
                </div>
    
        </div>

    )


}
