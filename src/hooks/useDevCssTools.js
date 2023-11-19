import { useEffect, useState } from "react";

export const useDevCssTools = () => {
  const [outline, setOutline] = useState(false);
  const [color, setColor] = useState("lightskyblue");

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === ",") {
        setOutline(!outline);
      }
      if (event.ctrlKey && event.key === ".") {
        setColor("#" + Math.floor(Math.random() * 16777215).toString(16));
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [outline, color]);

  useEffect(() => {
    const elements = document.body.getElementsByTagName("*");
    for (let i = 0; i < elements.length; i++) {
      if (outline) {
        elements[i].style.outline = `1px dotted ${color}`;
      } else {
        elements[i].style.outline = "none";
      }
    }
  }, [outline, color]);

  useEffect(() => {
    const tooltip = document.createElement("div");
    tooltip.id = "dev-tooltip";
    tooltip.style.position = "fixed";
    tooltip.style.bottom = "10px";
    tooltip.style.right = "10px";
    tooltip.style.backgroundColor = "rgba(0,0,0,0.8)";
    tooltip.style.color = "#fafafa";
    tooltip.style.fontSize = "18px";
    tooltip.style.border = "1px solid black";
    tooltip.style.padding = "5px";
    tooltip.style.zIndex = "10000";
    document.body.appendChild(tooltip);

    const handleMouseOver = (event) => {
      tooltip.textContent = `
                             class: ${event.target.className}
                             W: ${event.target.offsetWidth}px
                             H: ${event.target.offsetHeight}px
                             <${event.target.tagName}>`;
    };

    const handleMouseOut = () => {
      tooltip.textContent = "";
    };

    window.addEventListener("mouseover", handleMouseOver);
    window.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      window.removeEventListener("mouseout", handleMouseOut);
      tooltip.remove();
    };
  }, []);

  return { outline, color };
};
