import React from 'react';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    position?: "right" | "top" | "bottom" | "left";
}

const Tooltip: React.FC<TooltipProps> = ({ children, text, position = "bottom" }) => {
    return (
        <div className="relative group">
            <div>
                {children}
            </div>
            <div className={`absolute z-10 bg-black text-white text-xs px-2 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${position === "right" ? "left-10 top-1/2 transform -translate-y-1/2" : position === "top" ? "left-1/2 top-0 transform -translate-x-1/2 -translate-y-full" : position === "bottom" ? "left-1/2 -bottom-1 transform -translate-x-1/2 translate-y-full" : "right-10 top-1/2 transform -translate-y-1/2"}`}>
                {text}
            </div>
        </div>
    );
};

export default Tooltip;