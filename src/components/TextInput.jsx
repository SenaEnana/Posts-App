function TextInput({ value, type, name, label, onChange, error, placeholder }) {
  return (
    <div className="flex flex-col w-full gap-1.5">
      {/* Label */}
      <label className="text-sm font-medium text-slate-700 text-left">
        {label}
      </label>
      
      {/* Input Container */}
      <div className="relative">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={`w-full rounded-xl border px-3.5 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none transition-all
            ${
              error
                ? "border-red-500 bg-red-50/30 focus:border-red-500 focus:ring-4 focus:ring-red-100"
                : "border-slate-200 bg-white focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
            }
          `}
        />
      </div>

      {/* Error Message */}
      {error && (
        <p className="text-xs font-medium text-red-600 text-left mt-0.5 animate-fadeIn">
          {error}
        </p>
      )}
    </div>
  );
}

export default TextInput;