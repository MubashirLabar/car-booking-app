import * as React from "react";
import Svg, { Path } from "react-native-svg";

function ArrowLeftIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 32"
    >
      <Path
        fill={color}
        d="M12 28a1.99 1.99 0 01-1.414-.586l-10-10a2 2 0 010-2.828l10-10a2 2 0 112.828 2.828L4.828 16l8.588 8.587A2 2 0 0112 27.999z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M27.944 16c0 1.106-.837 2-1.944 2H6.831l-2-2 2-2H26c1.106 0 1.944.894 1.944 2z"
      />
    </Svg>
  );
}

export default ArrowLeftIcon;
