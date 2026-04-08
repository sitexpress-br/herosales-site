import { useEffect } from "react";

const WIDGET_ID = "69a0ea47b71dc527e3dfa584";

const WhatsAppWidget = () => {
  useEffect(() => {
    if (document.querySelector(`script[data-widget-id="${WIDGET_ID}"]`)) return;

    const script = document.createElement("script");
    script.src = "https://beta.leadconnectorhq.com/loader.js";
    script.setAttribute("data-resources-url", "https://beta.leadconnectorhq.com/chat-widget/loader.js");
    script.setAttribute("data-widget-id", WIDGET_ID);
    script.async = true;
    document.body.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
};

export default WhatsAppWidget;
