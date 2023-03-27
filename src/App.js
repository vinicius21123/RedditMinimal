import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { useDispatch ,useSelector} from 'react-redux';
import {Nav} from './features/Nav/Nav'
import {Post} from './features/post/post'
import { Route, Link, BrowserRouter as Router, Routes} from 'react-router-dom';
import { useEffect ,useState} from 'react';
import { addPost } from './features/post/postSlice';
import { getSubreddits } from './features/post/postAPI'; 
import { selectPost } from './features/post/postSlice';
function App () {
  //const activeSub = useSelector(state => state.subreddits.activeSubreddit);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const fetchInfo = ()=>{
    return getSubreddits()
    .then(response => {

      setLoading(false);
      setData(response)

    })
  }
  useEffect(() => {
    fetchInfo();
  },[]);

  if(loading===false){
    dispatch(addPost(data))
  }
  return (
    
      <div className="App">
        <header className="App-header">

          <Nav />
          <Routes>
              <Route path='/'element={<Post loading={loading} data={data}/>}/>
                

          </Routes>
        </header>
      </div>
        
  );
}

export default App;
