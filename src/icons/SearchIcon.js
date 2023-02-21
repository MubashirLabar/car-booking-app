import * as React from "react";
import Svg, { Path } from "react-native-svg";

function SearchIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 32 32"
    >
      <Path
        fill={color}
        d="M31.269 27.731l-7.481-7.481a13.075 13.075 0 01-3.536 3.536l7.481 7.481a2.501 2.501 0 003.536-3.536z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M12.944 0C5.82 0 0 5.821 0 13s5.82 13 12.944 13 13-5.821 13-13-5.762-13-13-13zm0 21c-4.411 0-8-3.589-8-8s3.589-8 8-8 8 3.589 8 8c0 4.413-3.531 8-8 8z"
      />
    </Svg>
  );
}

export default SearchIcon;
