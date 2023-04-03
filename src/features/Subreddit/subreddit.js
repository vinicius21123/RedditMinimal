import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { store } from '../../app/store';
import './subreddit.css'
export  function Subreddit(props){
    let loading = props.loading;
    let data = props.data

    function loadData(){
        
        let arr =[]
        for(let i =0;i<data.length;i++){
            arr.push(data[i])
            
            
        }
        return arr.map(obj=>{
            return (
                <div key={obj.display_name} className='subredditCard' id={obj.display_name} onClick={props.clickHandler}>
                    <div className='topBit'>
                        <img id={obj.display_name} className='iconSub'src={obj.icon_img ||
                `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                
                    <p className="NameofReddit" id={obj.display_name}>{obj.url}</p>
                    
                    <img id={obj.display_name} className='bannerSub'src={obj.banner_img || 'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png'}/>
                    <p1 id={obj.display_name}>{obj.subscribers} subscribers</p1>
                    <h2 id={obj.display_name}>{obj.title}</h2>
                    <p1 id={obj.display_name}>{obj.public_description || obj.description}</p1><br/>
                    <button className="button"id={obj.display_name} type="button">{'<< '}Browse Subreddit</button>
                    </div>
                    
                </div>
            )
                    })
    }
        function loadingData(){
            let arr =[];
            for(let i =0;i<10;i++){
                arr.push(i)
            }   
            return  arr.map(obj=>{
            
                return (
                    <div key={obj.display_name} className='subredditCard' >
                        <img className='iconSub'src={
                      `https://icon-library.com/images/no-user-image-icon/no-user-image-icon-27.jpg`}/>
                        <p >Loading...</p>
                        <img className='bannerSub'src={'https://b.thumbs.redditmedia.com/PXt8GnqdYu-9lgzb3iesJBLN21bXExRV1A45zdw4sYE.png'}/>
                        
                        <h2>Loading...</h2>
                        <p>Loading...</p>
                        
                    </div>
                )
            })
        
    }
    
    return(
        <div>
            
                <div className="subContainer">
                    {loading?loadingData():loadData()}
                </div>
    
        </div>

    )


}
