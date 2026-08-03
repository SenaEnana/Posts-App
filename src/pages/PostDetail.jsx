import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const PostDetail = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [isDeleting, setIsDeleting] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((response) => response.json())
      .then((data) => setPost(data))
      .catch((error) => console.error("Error fetching post details:", error));
  }, [id]);

  async function deleteOperation(postId) {
    if (!window.confirm("Are you sure you want to delete this post?")) return;
    
    setIsDeleting(true);
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          method: "DELETE",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.ok) {
        alert("Post deleted successfully");
        navigate("/getPosts");
      } else {
        console.log("Failed to delete post");
        setIsDeleting(false);
      }
    } catch (error) {
      console.error("Error deleting post:", error.message);
      setIsDeleting(false);
    }
  }

  if (!post) {
    return (
      <Navbar>
        <div className="max-w-2xl mx-auto mt-6 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-4 animate-pulse">
          <div className="h-4 bg-slate-200 rounded w-1/4"></div>
          <div className="h-8 bg-slate-200 rounded w-3/4"></div>
          <div className="space-y-2 pt-4">
            <div className="h-4 bg-slate-200 rounded w-full"></div>
            <div className="h-4 bg-slate-200 rounded w-5/6"></div>
          </div>
        </div>
      </Navbar>
    );
  }

  return (
    <Navbar>
      <div className="max-w-2xl mx-auto mt-6">
        <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden relative">
          
          <div className="h-2 w-full bg-gradient-to-r from-indigo-500 to-cyan-400" />
          
          <div className="p-6 sm:p-8">

            <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-lg">
                  ID: #{post.id}
                </span>
                <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-lg">
                  👤 Author {post.userId}
                </span>
              </div>
              
              <button
                onClick={() => navigate("/getPosts")}
                className="text-sm font-medium text-slate-500 hover:text-slate-800 transition-colors"
              >
                ← Back to Feed
              </button>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight capitalize mb-6">
              {post.title}
            </h1>

            <div className="text-slate-600 text-base sm:text-lg leading-relaxed border-t border-b border-slate-100 py-6 my-6">
              {post.body || "No text description provided for this specific article payload."}
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                disabled={isDeleting}
                onClick={() => deleteOperation(post.id)}
                className="px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-all disabled:opacity-50"
              >
                {isDeleting ? "Deleting..." : "Delete Post"}
              </button>
              
              <Link to={`/updatePost/${post.id}`}>
                <button className="px-4 py-2 rounded-xl border border-cyan-200 bg-cyan-50 text-sm font-semibold text-cyan-700 hover:bg-cyan-100 transition-all">
                  Edit Content
                </button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </Navbar>
  );
};

export default PostDetail;