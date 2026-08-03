import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar({ children }) {
  const navigate = useNavigate();
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col pb-16 md:pb-0">
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4">
          <Link to="/" className="text-xl font-bold tracking-tight text-cyan-600">
            PostSpace<span className="text-xs font-semibold ml-1 px-1.5 py-0.5 bg-cyan-50 text-cyan-700 rounded-full">PWA</span>
          </Link>
          
          <nav className="hidden md:flex items-center gap-6">
            <Link 
              to="/getPosts" 
              className={`text-sm font-medium transition-colors ${isActive('/getPosts') ? 'text-cyan-600' : 'text-slate-600 hover:text-slate-900'}`}
            >
              View Posts
            </Link>
            <button
              onClick={() => navigate("/createPosts")}
              className="rounded-lg bg-cyan-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-cyan-500 transition-all"
            >
              Create Post
            </button>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8">
        {children}
      </main>


      <nav className="fixed bottom-0 left-0 z-40 h-16 w-full border-t border-slate-200 bg-white md:hidden flex items-center justify-around px-6 shadow-lg">
        <Link 
          to="/" 
          className={`flex flex-col items-center justify-center text-xs gap-0.5 ${isActive('/') ? 'text-cyan-600 font-semibold' : 'text-slate-500'}`}
        >
          <span className="text-lg">🏠</span>
          Home
        </Link>
        <Link 
          to="/getPosts" 
          className={`flex flex-col items-center justify-center text-xs gap-0.5 ${isActive('/getPosts') ? 'text-cyan-600 font-semibold' : 'text-slate-500'}`}
        >
          <span className="text-lg">📄</span>
          Feed
        </Link>
        <Link 
          to="/createPosts" 
          className={`flex flex-col items-center justify-center text-xs gap-0.5 ${isActive('/createPosts') ? 'text-cyan-600 font-semibold' : 'text-slate-500'}`}
        >
          <span className="text-lg">➕</span>
          Create
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;