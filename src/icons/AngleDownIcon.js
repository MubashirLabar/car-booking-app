import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AngleDownIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 32"
    >
      <Path
        fill={color}
        d="M12 24a1.99 1.99 0 01-1.414-.586l-10-10a2 2 0 112.828-2.828L12 19.175l8.587-8.588a2 2 0 112.828 2.828l-10 10a1.993 1.993 0 01-1.416.584z"
      />
    </Svg>
  );
}

export default AngleDownIcon;
