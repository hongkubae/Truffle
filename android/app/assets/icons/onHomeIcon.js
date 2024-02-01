import React from 'react';
import { SvgXml } from 'react-native-svg';

const OnHomeIcon = () => {
  const svgXml = `
  <svg width="59" height="58" viewBox="0 0 59 58" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M44.14 29.2621L32.0039 16.166C30.4209 14.4578 27.719 14.4578 26.1361 16.166L14 29.2621H44.14Z" fill="black"/>
<path d="M18.11 44.6855L17.9796 29.9481H40.03V44.6855H32.495C32.3506 38.9043 32.495 35.8432 29.07 35.8432C25.645 35.8432 25.645 38.0536 25.645 44.6855H18.11Z" fill="black"/>
<path d="M44.14 29.2621L32.0039 16.166C30.4209 14.4578 27.719 14.4578 26.1361 16.166L14 29.2621H44.14Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.11 44.6855L17.9796 29.9481H40.03V44.6855H32.495C32.3506 38.9043 32.495 35.8432 29.07 35.8432C25.645 35.8432 25.645 38.0536 25.645 44.6855H18.11Z" stroke="black" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

  `;

  return <SvgXml xml={svgXml} />;
};

export default OnHomeIcon;