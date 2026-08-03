import { Routes, Route } from "react-router-dom";
import CreatePosts from './pages/CreatePost';
import GetPosts from './pages/GetPosts';
import PostDetail from './pages/PostDetail';
import UpdatePost from './pages/UpdatePost';
import { useState, useEffect } from 'react';
import Home from './pages/Home';
import InstallPWA from './installPWA';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10'); // Limiting for cleaner PWA viewing
        const data = await response.json();
        setPosts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching posts:", error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const addNewPost = (post) => {
    setPosts((prevPosts) => [post, ...prevPosts]); // Puts new posts at the top of the feed
  };

  const deletePost = (id) => {
    setPosts((prevPosts) => prevPosts.filter(post => post.id !== parseInt(id)));
  };

  const updatePost = (updatedPost) => {
    setPosts((prevPosts) => 
      prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post)
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <div className="w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-slate-500">Syncing application feed...</p>
        </div>
      </div>
    ); 
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <InstallPWA />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createPosts" element={<CreatePosts addNewPost={addNewPost} />} />
        <Route path="/getPosts" element={<GetPosts posts={posts} />} />
        
        {/* Pass state control handlers down so details and update screens work natively */}
        <Route path="/postDetail/:id" element={<PostDetail deletePost={deletePost} />} />
        <Route path="/updatePost/:id" element={<UpdatePost updatePost={updatePost} />} />
      </Routes>
    </div>
  );
}

export default App;