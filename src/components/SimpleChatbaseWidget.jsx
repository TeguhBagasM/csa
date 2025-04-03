import { useEffect } from "react";

const SimpleChatbaseWidget = ({ darkMode }) => {
  useEffect(() => {
    const existingScript = document.getElementById("u1CyihuWFxg1rX3atbI3H");
    if (existingScript) {
      existingScript.remove();
    }

    if (window.chatbase && typeof window.chatbase === "function") {
      window.chatbase = undefined;
    }

    window.chatbaseConfig = {
      buttonText: "Tanya CS",
      buttonBackground: darkMode ? "#3B82F6" : "#4CAF50",
      buttonIconColor: "#ffffff",
      buttonBottom: "20px",
      buttonRight: "20px",
      roundedCorners: true,
      greeting: "Hi! What can I help you with?",
      awaysAvailable: true,
      chatHeight: "500px",
      chatWidth: "350px",
      fontSize: "16px",
      chatBackground: darkMode ? "#1F2937" : "#ffffff",
      chatTextColor: darkMode ? "#ffffff" : "#000000",
      inputBackground: darkMode ? "#374151" : "#f0f0f0",
      primaryColor: darkMode ? "#3B82F6" : "#4CAF50",
      allowClose: true,
    };

    const initChatbase = () => {
      const script = document.createElement("script");
      script.src = "https://www.chatbase.co/embed.min.js";
      script.id = "u1CyihuWFxg1rX3atbI3H";
      script.domain = "www.chatbase.co";
      script.defer = true;
      document.body.appendChild(script);

      script.onload = () => {
        setTimeout(() => {
          if (window.chatbase && typeof window.chatbase === "function") {
            window.chatbase("updateConfig", window.chatbaseConfig);
          }
        }, 1000);
      };
    };

    if (document.readyState === "complete") {
      initChatbase();
    } else {
      window.addEventListener("load", initChatbase);
      return () => window.removeEventListener("load", initChatbase);
    }

    return () => {
      const scriptToRemove = document.getElementById("u1CyihuWFxg1rX3atbI3H");
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [darkMode]);

  return null;
};

export default SimpleChatbaseWidget;
