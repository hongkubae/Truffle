import React from 'react';
import { SvgXml } from 'react-native-svg';

const OffHomeIcon = () => {
  const svgXml = `
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g id="Home icon">
  <path id="shape" d="M4.97956 16.5815L5.11 31H12.645C12.645 24.5116 12.645 22.349 16.07 22.349C19.495 22.349 19.3506 25.3439 19.495 31H27.03V16.5815M31.14 15.9102L18.974 3.06599C17.3963 1.40026 14.7437 1.40027 13.1659 3.066L1 15.9102H31.14Z" stroke="#111111" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  </svg>
  `;

  return <SvgXml xml={svgXml} />;
};

export default OffHomeIcon;