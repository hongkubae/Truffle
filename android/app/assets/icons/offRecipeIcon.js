import React from 'react';
import { SvgXml } from 'react-native-svg';

const OffRecipeIcon = () => {
  const svgXml = `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 2631">
  <path id="Vector 5" d="M1 9.11133C1 14.1811 5.87867 14.1811 5.87867 14.6881M15.0937 9.11133C15.0937 15.1951 10.3107 14.3054 10.2152 14.6881M10.2152 31.4184H5.87867" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  <path id="shape" d="M5.87891 14.6885V31.4188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="Vector 14" d="M5.87891 30.4048V14.6885M10.2154 30.4048V14.6885" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  <path id="shape_2" d="M10.2148 14.6885V31.4188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="shape_3" d="M15.0937 9.11168C15.0937 4.10467 13.236 1 8.04687 1C2.8577 1 1 4.10467 1 9.11168" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="shape_4" d="M27.0195 15.1999C32.8442 15.1956 31.8981 9.61867 31.8981 3.02793L28.6457 3.02758L28.6457 10.1256L26.4774 10.1256L26.4774 3.02791L23.225 3.02758L23.225 10.1256L21.0568 10.1256L21.0568 3.02791L17.8044 3.02758C17.8165 9.79395 17.1072 15.1958 22.683 15.1954L22.683 31.9258L27.0195 31.9258L27.0195 15.1999Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  
  `;

  return <SvgXml xml={svgXml} />;
};

export default OffRecipeIcon;