import { useEffect, useState } from "react";

const InstallPWA = () => {
  const [prompt, setPrompt] = useState(null);

  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (event) => {
      event.preventDefault();
      setPrompt(event);
    });

    return () => {
      window.removeEventListener("beforeinstallprompt", () => {});
    };
  }, []);

  const installPWA = () => {
    if (prompt) {
      prompt.prompt();
    }
  };

  return prompt ? <button onClick={installPWA}>Install App</button> : null;
};

export default InstallPWA;
