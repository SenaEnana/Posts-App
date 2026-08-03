import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PostCard from "../components/PostCard";

function GetPosts({ posts }) {
  const navigate = useNavigate();

  return (
    <Navbar>
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-5">
          <div>
            <h1 className="text-2xl font-extrabold tracking-tight text-slate-950">
              Community Feed
            </h1>
            <p className="text-sm text-slate-500 mt-1">
              Explore recent articles, updates, and user stories.
            </p>
          </div>
          
          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/")}
              className="px-4 py-2 rounded-xl border border-slate-200 text-sm font-semibold text-slate-600 hover:bg-slate-50 transition-colors"
            >
              Back Home
            </button>
            {/* <button
              onClick={() => navigate("/createPosts")}
              className="px-4 py-2 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors flex items-center gap-1.5"
            >
              <span>➕</span> New Post
            </button> */}
          </div>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300 p-8 max-w-md mx-auto mt-6">
            <span className="text-4xl block mb-3">📭</span>
            <h3 className="text-lg font-bold text-slate-950">No posts available</h3>
            <p className="text-sm text-slate-500 mt-1 mb-6">
              Be the first to share an update with the local app community.
            </p>
            <button
              onClick={() => navigate("/createPosts")}
              className="px-4 py-2 rounded-xl bg-cyan-600 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 transition-colors"
            >
              Create a Post
            </button>
          </div>
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {posts.map((post, index) => (
              <PostCard key={post.id} post={post} index={index + 1} />
            ))}
          </div>
        )}
      </div>
    </Navbar>
  );
}

export default GetPosts;