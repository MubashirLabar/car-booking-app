import * as React from "react";
import Svg, { Path } from "react-native-svg";

function CirclePlusIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <Path
        fill={color}
        d="M22 17.5h-4.5V22c0 .825-.675 1.5-1.444 1.5-.881 0-1.556-.675-1.556-1.5v-4.5H10c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5h4.5V10c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v4.5H22c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M16 0C7.162 0 0 7.162 0 16s7.162 16 16 16c8.837 0 16-7.163 16-16S24.837 0 16 0zm6 17.5h-4.5V22c0 .825-.675 1.5-1.444 1.5-.881 0-1.556-.675-1.556-1.5v-4.5H10c-.825 0-1.5-.675-1.5-1.5s.675-1.5 1.5-1.5h4.5V10c0-.825.675-1.5 1.5-1.5s1.5.675 1.5 1.5v4.5H22c.825 0 1.5.675 1.5 1.5s-.675 1.5-1.5 1.5z"
      />
    </Svg>
  );
}

export default CirclePlusIcon;
