import { Link } from "react-router-dom";

function PostCard({ post, index }) {
  return (
    <div className="group bg-white rounded-2xl border border-slate-200 p-5 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative overflow-hidden">
      <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-indigo-500 to-cyan-400 group-hover:from-indigo-600 group-hover:to-cyan-500 transition-colors" />

      <div className="pl-2">
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-semibold text-cyan-600 bg-cyan-50 px-2 py-0.5 rounded-md">
            Post #{index}
          </span>
          <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
            👤 User {post.userId}
          </span>
        </div>

        <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-600 transition-colors line-clamp-1 mb-2 capitalize">
          {post.title}
        </h3>

        <p className="text-sm text-slate-500 line-clamp-2 leading-relaxed mb-4">
          {post.body || "No text description provided for this specific post entry."}
        </p>
      </div>

      <div className="pl-2 pt-3 border-t border-slate-100 flex items-center justify-end">
        <Link 
          to={`/postDetail/${post.id}`}
          className="inline-flex items-center gap-1 text-sm font-semibold text-cyan-600 hover:text-cyan-600 transition-colors group/btn"
        >
          Read Details 
          <span className="transform group-hover/btn:translate-x-0.5 transition-transform">→</span>
        </Link>
      </div>
    </div>
  );
}

export default PostCard;