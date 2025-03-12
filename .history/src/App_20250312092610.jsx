import './App.css'
import { Routes, Route } from "react-router-dom";
import CreatePosts from './pages/addPosts/createPosts'
import GetPosts from './pages/getPosts';
import PostDetail from './pages/postDetail';
import UpdatePost from './pages/updatePost';
import { useState, useEffect } from 'react';
import Home from './pages/home';
import InstallPWA from './installPWA';

function App() {
  const [newPosts, setNewPosts] = useState([]);
  const [allPosts, setAllPosts] = useState([]);

  const addNewPost = (post) => {
      setNewPosts((prevPosts) => [...prevPosts, post]);
      setAllPosts((prevPosts) => [...prevPosts, post]); 
  };

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
      const fetchData = async () => {
          try {
              const response = await fetch('https://jsonplaceholder.typicode.com/posts');
              const data = await response.json();
              setPosts(data);
              setLoading(false);
          } catch (error) {
              console.error("Error fetching posts:", error);
          }
      };

      fetchData();
  }, []); 


  if (loading) {
      return <div>Loading...</div>; 
  }

  const deletePost = (id) => {
      setAllPosts((prevPosts) => prevPosts.filter(post => post.id !== id));
  };

  const updatePost = (updatedPost) => {
      setAllPosts((prevPosts) => 
          prevPosts.map(post => post.id === updatedPost.id ? updatedPost : post)
      );
  };

  return (
    <div>
         <div className="app">
            <InstallPWA/>
             <Routes>
             <Route path="/" element={<Home/>} />
               <Route path="/createPosts" element={<CreatePosts addNewPost={addNewPost} />} />
               <Route path="/getPosts" element={<GetPosts posts={posts}/>} />
               <Route path="/postDetail/:id" element={<PostDetail/>} />
               <Route path="/updatePost/:id" element={<UpdatePost/>} />
             </Routes>
         </div>

    </div>
  )
}

export default App


// ///for the offline to apply the offline work
// //import React, { useEffect, useState } from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   const [posts, setPosts] = useState([]);
//   const [isOffline, setIsOffline] = useState(!navigator.onLine);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await response.json();
//         setPosts(data);
//       } catch (error) {
//         console.error('Error fetching posts:', error);
//       }
//     };

//     fetchPosts();

//     const handleOnline = () => setIsOffline(false);
//     const handleOffline = () => setIsOffline(true);

//     window.addEventListener('online', handleOnline);
//     window.addEventListener('offline', handleOffline);

//     return () => {
//       window.removeEventListener('online', handleOnline);
//       window.removeEventListener('offline', handleOffline);
//     };
//   }, []);

//   return (
//     <div>
//       {isOffline && <p>You are offline. Some features may not be available.</p>}
//       <ul>
//         {posts.map(post => (
//           <li key={post.id}>{post.title}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// ReactDOM.render(<App />, document.getElementById('root'));