import { useEffect } from "react";

function useUploadWidget() {
  useEffect(() => {
    const scriptUrl = "https://widget.cloudinary.com/v2.0/global/all.js";

    const existingScript = document.querySelector(`script[src="${scriptUrl}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      document.head.appendChild(script);
    }

    return () => {
      document.querySelectorAll("iframe").forEach((iframe) => {
        if (iframe.title === "Upload Widget") {
          iframe.remove();
        }
      });
    };
  }, []);
}

export default useUploadWidget;
