import React from "react";
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();
  
  return (
    <div className={`${
      isDark 
        ? 'bg-gradient-to-b from-slate-900 to-slate-950' 
        : 'bg-gradient-to-b from-gray-100 to-gray-200'
    }`}>
      <div className="flex place-content-center">
        <a href="https://buttercms.com/" target="_blank">
          <img
            src="https://cdn.buttercms.com/RyJ7UhcVTCRqrCFXwgCo"
            width="100"
            height="100"
          />
        </a>
      </div>
    </div>
  );
};

export default Footer;
