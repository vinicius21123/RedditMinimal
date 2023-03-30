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
import { IndividualPost } from './features/individualPost/individualPost';
import { getSubreddits } from './features/post/postAPI'; 
import { getSubredditPosts } from './features/post/postAPI'; 
import { useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
function App () {
  //const activeSub = useSelector(state => state.subreddits.activeSubreddit);
  let params = useParams()
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dataPost, setDataPost] = useState([]);
  const [loadingPost, setLoadingPost] = useState(true);
  const [dataIndPost, setDataIndPost] = useState([]);
  const [loadingIndPost, setLoadingIndPost] = useState(true);
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
  
  
  useEffect(() => {
    fetchInfo();
  },[window.location.pathname]);

  if(loading===false){
    dispatch(addSubreddit(data))

  }

  function clickHandler(e){
    
      window.location.pathname = '/subreddit/'+ e.target.id;
  }
  

  return (
    
      <div className="App">
        <header className="App-header">

          <Nav />
          <SideSub loading={loading} data={data} clickHandler={clickHandler}/>
          <Routes> 
            {/* window.location.pathname.substr(11) */}
              <Route path={'/subreddit/'}element={<Subreddit loading={loading} data={data} clickHandler={clickHandler}/>}/>
              <Route path={'/subreddit/:subredditId'}element={<Post />}/>
              <Route path={'/subreddit/:subredditId/:commentId'}element={<IndividualPost />}/>
              <Route path={'/filter/:filterName'}element={<Post />}/>
              <Route path={'/'}element={<Post />}/>
              {/* <Route path={'/filter/new'}element={<Post filter='/new'/>}/>
              <Route path={'/filter/rising'}element={<Post filter='/rising'/>}/>
              <Route path={'/filter/top'}element={<Post filter='/top'/>}/> */}



          </Routes>
        </header>
      </div>
        
  );
}
export default App;
