import React from 'react';
import { SvgXml } from 'react-native-svg';

const OffCalIcon = () => {
  const svgXml = `
  <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path id="shape" d="M27.3165 17.5432V26.8937H14.5H1.68349V17.5432M27.3165 17.5432C27.3165 13.8527 27.6516 6.01168 24.1124 6.01168H4.88763C1.34845 6.01168 1.68349 13.8527 1.68349 17.5432M27.3165 17.5432L28 30.49H1L1.68349 17.5432M8.89279 1L8.89277 4.75876V8.51751M14.5 1V8.51751M20.1072 1V8.51751M13.825 22.3803L17.875 13.5333H11.8" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  
  `;

  return <SvgXml xml={svgXml} />;
};

export default OffCalIcon;