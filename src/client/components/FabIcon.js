import React from "react";
import Svg, { G, Path } from "react-native-svg";
const FabIcon = ({ svgRef, ...props }) => (
  <Svg viewBox="0 0 200 200" width="1em" height="1em" ref={svgRef} {...props}>
    <G fillRule="nonzero" fill="none">
      <Path d="M0 100h100V0C44.772 0 0 44.772 0 100z" fill="#F7B808" />
      <Path d="M200 100C200 44.772 155.228 0 100 0v100h100z" fill="#8DC63F" />
      <Path d="M100 200c55.228 0 100-44.772 100-100H100v100z" fill="#00A79D" />
      <Path d="M0 100c0 55.228 44.772 100 100 100V100H0z" fill="#007EB7" />
      <Path
        fill="#FFF"
        d="M155.32 92.58h-47.99V44.59H92.15v47.99h-48v15.18h48v47.99h15.18v-47.99h47.99z"
      />
    </G>
  </Svg>
);

export default FabIcon;
