import { useEffect, useState } from "react";

const InstallPWA = () => {
  const [installPrompt, setInstallPrompt] = useState(null);

  useEffect(() => {
    const handleBeforeInstallPrompt = (event) => {
      event.preventDefault();

      setInstallPrompt(event);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);

    return () => {

      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!installPrompt) return;

    installPrompt.prompt();

    // Wait for the user to make a choice (Accept or Dismiss)
    const choiceResult = await installPrompt.userChoice;
    if (choiceResult.outcome === "accepted") {
      console.log("User accepted the installation prompt!");
      setInstallPrompt(null); // Clear prompt if successful
    }
  };

  if (!installPrompt) return null;

  return (
    <div className="fixed bottom-20 left-4 right-4 z-50 mx-auto max-w-md rounded-2xl border border-indigo-100 bg-white p-4 shadow-xl ring-1 ring-black/5 animate-slideUp md:bottom-6 md:right-6 md:left-auto">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="text-2xl">📥</span>
          <div>
            <h4 className="text-sm font-bold text-slate-900">Install PostSpace</h4>
            <p className="text-xs text-slate-500">Save to your home screen for quick, offline access.</p>
          </div>
        </div>
        
        <div className="flex items-center gap-2 shrink-0">
          <button 
            onClick={() => setInstallPrompt(null)}
            className="px-3 py-1.5 text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
          >
            Later
          </button>
          <button
            onClick={handleInstallClick}
            className="rounded-xl bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 transition-colors"
          >
            Install
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallPWA;