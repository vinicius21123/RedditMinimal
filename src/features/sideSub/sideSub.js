import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './sideSub.css';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { store } from '../../app/store';
export  function SideSub(props){
    let loading = props.loading;
    let data = props.data

   // let  {postState} = props.postsObj;
   
    
    function loadData(){
        let arr =[]
        for(let i =1;i<9;i++){
            arr.push(data[i])
            
            
        }
        
            return arr.map(obj=>{
                
                return (
                    <div className="sideSubContainer">
                        <div key={obj.display_name} className='sideSubredditCard' id={obj.display_name} onClick={props.clickHandler}>
                        <Link  to={'/subreddit/'+obj.title}>
                            <img id={obj.display_name} className='iconSideSub'src={obj.icon_img ||
                  `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <p id={obj.display_name}>{obj.url}  {obj.subscribers} Subscribers</p>
                            
                        
                            
                        </Link>
                        </div>
                    </div>
                )
            })
        
        
    }
    function loadingData(){
        let arr =[]
        for(let i =1;i<9;i++){
            arr.push([i])      
        }
        
            return arr.map(obj=>{
                
                return (
                    <div key={obj} className="sideSubContainer">
                        <div key={obj.display_name} className='sideSubredditCard'>
                        <Link  to={'/subreddit/'+obj.title}>
                            <img  className='iconSideSub'src={
                  `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <p>Loading....  </p>
                            
                        
                            
                        </Link>
                        </div>
                    </div>
                )
            })
        
        
    }
    return(
        <div className='sideSub'>
            {loading?loadingData():loadData()}
            <Link className='view' to="/subreddit">View All Subreddits</Link>
        </div>

    )


}
