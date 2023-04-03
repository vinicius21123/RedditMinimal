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
import { SearchBar } from './features/searchBar/searchBar';
import { trackPromise } from 'react-promise-tracker';
import { fetchSearchResults } from './features/post/postAPI';
import { setSearchTerm } from './features/searchBar/seachSlice';

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
  const search = (term) => {
   
    fetchSearchResults(term).then(results => {
      dispatch(setSearchTerm(results));
    })
  };

  return (
    
      <div className="App">
        <div className='SearchBarSec'> 
          <a href="/"><img className='redditLogoSearch'src='https://download.logo.wine/logo/Reddit/Reddit-Logo.wine.png'/></a>
          <SearchBar onSearch={search} />
        </div>
        <header className="App-header">
           <div className='Side'>
              <Nav />
              <SideSub loading={loading} data={data} clickHandler={clickHandler}/>
            </div>
            <div className='containerForPosts'>
            <Routes> 
                <Route path={'/subreddit/'}element={<Subreddit loading={loading} data={data} clickHandler={clickHandler}/>}/>
                <Route path={'/subreddit/:subredditId'}element={<Post />}/>
                <Route path={'/subreddit/:subredditId/:commentId'}element={<IndividualPost />}/>
                <Route path={'/filter/:filterName'}element={<Post />}/>
                <Route path={'/'}element={<Post />}/>
            </Routes>
          </div>
        </header>
      </div>
        
  );
}
export default App;
