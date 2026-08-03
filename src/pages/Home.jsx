import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

function Home() {
  const navigate = useNavigate();

  return (
    <Navbar>
      <div className="flex flex-col items-center justify-center text-center py-12 px-4 rounded-2xl bg-white border border-slate-200 shadow-sm max-w-2xl mx-auto mt-6">
        <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mb-6 shadow-inner animate-bounce">
          📮
        </div>
        
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mb-3">
          Welcome to PostSpace
        </h1>
        
        <p className="text-slate-500 max-w-md mb-8 text-base sm:text-lg">
          Your personal Progressive Web App dashboard to create, read, and manage thoughts seamlessly, even offline.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-indigo-600 text-sm font-semibold text-white shadow-md hover:bg-indigo-500 transition-all active:scale-95"
            onClick={() => navigate("/createPosts")}
          >
            Create a Post
          </button>
          
          <button
            className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-100 text-sm font-semibold text-slate-700 hover:bg-slate-200 transition-all active:scale-95"
            onClick={() => navigate("/getPosts")}
          >
            View Existing Feed
          </button>
        </div>
      </div>
    </Navbar>
  );
}

export default Home;