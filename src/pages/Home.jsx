import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">

      <header className="w-full bg-white border-b border-slate-200 sticky top-0 z-40 px-4 py-3 sm:px-6 shadow-xs">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2 no-underline">
            <span className="text-xl">📮</span>
            <span className="text-base font-bold tracking-tight text-cyan-600">PostSpace</span>
          </Link>
          
          <nav className="flex items-center gap-4">
            <Link 
              to="/getPosts" 
              className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors no-underline"
            >
              Feed
            </Link>
            <Link 
              to="/createPosts" 
              className="px-3.5 py-1.5 rounded-lg bg-cyan-50 text-xs font-semibold text-cyan-600 hover:bg-cyan-100 transition-all no-underline"
            >
              + New Post
            </Link>
          </nav>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-2xl py-12 px-6 rounded-2xl bg-white border border-slate-200 shadow-xs text-center">

          <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 shadow-inner animate-bounce">
            📮
          </div>
          
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl mb-3">
            Welcome to PostSpace
          </h1>
          
          <p className="text-slate-500 max-w-md mx-auto mb-8 text-base sm:text-lg">
            Your personal Progressive Web App dashboard to create, read, and manage thoughts seamlessly, even offline.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <button
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-cyan-600 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 transition-all active:scale-95"
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
      </main>
    </div>
  );
}

export default Home;