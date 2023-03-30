export const API_ROOT = 'https://www.reddit.com';

export const getSubredditPosts = async (subreddit) => {
  const response = await fetch(`${API_ROOT}/${subreddit}.json`);
  const json = await response.json();

  return json.data.children.map((post) => post.data);
};

export const getSubreddits = async () => {
  const response = await fetch(`${API_ROOT}/subreddits.json`);
  const json = await response.json();

  return json.data.children.map((subreddit) => subreddit.data);
};

export const getPostComments = async (permalink) => {
  const response = await fetch(`${API_ROOT}${permalink}.json`);
  const json = await response.json();

  return json[1].data.children.map((subreddit) => subreddit.data);
};

export const getSingleSubredditPosts = async (subreddit,id) => {
  const response = await fetch(`${API_ROOT}/${subreddit}/comments/${id}.json`);
  const json = await response.json();

  return json[0].data.children[0].data;;
};


export const fetchSearchResults = (term) =>{
  return fetch(`${API_ROOT}/search.json?q=${term}`)
      .then(response => {
          if (response.ok) {
              return response.json();
          }
      }).then(jsonResponse => {
          if (!jsonResponse) {
              return [];
          }
          console.log(jsonResponse.data.children);
          return jsonResponse.data.children;
      })
};