import * as React from "react";
import Svg, { Path } from "react-native-svg";

function UserIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 32"
    >
      <Path
        fill={color}
        d="M17.169 19h-6.338C4.85 19 0 23.85 0 29.831c0 1.196.97 2.167 2.166 2.167h23.669A2.162 2.162 0 0028 29.831C28 23.85 23.15 19 17.169 19z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M22 8c0 4.418-3.581 8-8 8s-8-3.581-8-8 3.582-8 8-8a8 8 0 018 8z"
      />
    </Svg>
  );
}

export default UserIcon;
