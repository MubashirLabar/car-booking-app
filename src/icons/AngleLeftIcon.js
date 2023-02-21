import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AngleLeftIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 16 32"
    >
      <Path
        fill={color}
        d="M12 28a1.99 1.99 0 01-1.414-.586l-10-10a2 2 0 010-2.828l10-10a2 2 0 112.828 2.828L4.828 16l8.588 8.587A2 2 0 0112 27.999z"
      />
    </Svg>
  );
}

export default AngleLeftIcon;
