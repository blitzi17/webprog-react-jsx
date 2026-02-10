import { useState, useEffect } from 'react'

function App() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // This is the REST API call for Task 04
    fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err.message));
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task 04: News Feed</h1>
      {posts.map((post) => (
        <div key={post.id} style={{ borderBottom: '1px solid #ccc', margin: '10px 0' }}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default App;