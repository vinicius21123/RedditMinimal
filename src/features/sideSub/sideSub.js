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
                    <Link  to={'/subreddit/'+obj.title}>
                    <div className="sideSubContainer">
                        
                            <div key={obj.display_name} className='sideSubredditCard' id={obj.display_name} onClick={props.clickHandler}>
                        
                            <img id={obj.display_name} className='iconSideSub'src={obj.icon_img ||
                  `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <p>{obj.url}</p>                                

                        
                            </div>
                        
                    </div>
                    </Link>
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
                        
                            <img  className='iconSideSub'src={
                  `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                            <p>Loading....  </p>
                            
                        
                            
                       
                        </div>
                    </div>
                )
            })
        
        
    }
    return(
        <div className='sideSub'>
            <h3>Featured Subreddits</h3>
            {loading?loadingData():loadData()}
            <Link className='view' to="/subreddit">View All Subreddits</Link>
        </div>

    )


}
