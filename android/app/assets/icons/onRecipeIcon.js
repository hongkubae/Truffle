import React from 'react';
import { SvgXml } from 'react-native-svg';

const OnRecipeIcon = () => {
  const svgXml = `
  <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Group 2630">
  <g id="Vector 5">
  <path d="M5.87867 14.6889C5.87867 14.1819 1 14.1819 1 9.11209C1 9.11209 15.0937 3.02834 15.0937 9.11209C15.0937 15.1958 10.3107 14.3062 10.2152 14.6889H5.87867Z" fill="black"/>
  <path d="M10.2152 31.4192H5.87867M1 9.11209C1 14.1819 5.87867 14.1819 5.87867 14.6889H10.2152C10.3107 14.3062 15.0937 15.1958 15.0937 9.11209C15.0937 3.02834 1 9.11209 1 9.11209Z" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  </g>
  <path id="shape" d="M5.87891 14.6885V31.4188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="Vector 14" d="M10.2154 30.4048H5.87891V14.6885H10.2154V30.4048Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round"/>
  <path id="shape_2" d="M10.2148 14.6885V31.4188" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="shape_3" d="M8.04687 1C2.8577 1 1 4.10467 1 9.11168H15.0937C15.0937 4.10467 13.236 1 8.04687 1Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  <path id="shape_4" d="M27.0195 15.1999C32.8442 15.1956 31.8981 9.61867 31.8981 3.02793L29.2203 3.02764L29.2203 10.1257L26.4774 10.1256L26.4774 3.02791L23.4581 3.0276L23.4581 10.1257L20.5003 10.1256L20.5003 6.49996L20.5003 3.02785L17.8044 3.02758C17.8165 9.79395 17.1072 15.1958 22.683 15.1954L22.683 31.9258L27.0195 31.9258L27.0195 15.1999Z" fill="black" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  `;

  return <SvgXml xml={svgXml} />;
};

export default OnRecipeIcon;