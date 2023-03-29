import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import {Nav} from './features/Nav/Nav'
import {Subreddit} from './features/Subreddit/subreddit';
import {SideSub} from './features/sideSub/sideSub';
import {Post} from './features/post/post';
import { Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import { useEffect ,useState} from 'react';
import { addSubreddit } from './features/Subreddit/subredditSlice';
import { addPost } from './features/post/postSlice';

import { getSubreddits } from './features/post/postAPI'; 
import { getSubredditPosts } from './features/post/postAPI'; 
import { useNavigate } from 'react-router-dom';
function App () {
  //const activeSub = useSelector(state => state.subreddits.activeSubreddit);
  
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataPost, setDataPost] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [currentSub,setCurrentSub] = useState('');
  const dispatch = useDispatch();
  let cur = ''
  let cur2 = 'Home'
  let pathToPost =  '/r/'+ cur + '/';
  

  const fetchInfo = ()=>{
    
    return getSubreddits()
    .then(response => {

      setLoading(false);
      setData(response)

    })
  }
  
  const fetchInfoPost = (path)=>{
    return getSubredditPosts(path)
    .then(response => {
      
      setLoadingPost(false);
      setDataPost(response);


    })
  }
  
  useEffect(() => {
    fetchInfo();
    fetchInfoPost('/r'+window.location.pathname.substr(10))
    
  },[window.location.pathname]);

  if(loading===false){
    dispatch(addSubreddit(data))


  }
  if(loadingPost===false){
    
    dispatch(addPost(dataPost))
  }
  function clickHandler(e){
      
       
      // // //cur2 = cur
      
      window.location.pathname = '/subreddit/'+e.target.id;
      


  }
  

  return (
    
      <div className="App">
        <header className="App-header">

          <Nav />
          <SideSub loading={loading} data={data} clickHandler={clickHandler}/>
          <Routes>

              <Route path={'/subreddit/'}element={<Subreddit loading={loading} data={data} clickHandler={clickHandler}/>}/>
              <Route path={'/subreddit/'+window.location.pathname.substr(11)}element={<Post loading={loadingPost} data={dataPost}/>}/> 


          </Routes>
        </header>
      </div>
        
  );
}
export default App;
