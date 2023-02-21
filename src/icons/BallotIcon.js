import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BallotIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 32"
    >
      <Path
        fill={color}
        d="M7 22H5c-.547 0-1 .456-1 1v2c0 .55.453 1 1 1h2c.55 0 1-.45 1-1v-2c0-.544-.45-1-1-1zm0-8H5c-.547 0-1 .456-1 1v2c0 .55.453 1 1 1h2c.55 0 1-.45 1-1v-2c0-.544-.45-1-1-1zm0-8H5c-.547 0-1 .456-1 1v2c0 .55.453 1 1 1h2c.55 0 1-.45 1-1V7c0-.544-.45-1-1-1z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M24 0H4a4 4 0 00-4 4v24a4 4 0 004 4h20a4 4 0 004-4V4c0-2.209-1.794-4-4-4zM8 25c0 .55-.45 1-1 1H5c-.547 0-1-.45-1-1v-2c0-.544.453-1 1-1h2c.55 0 1 .456 1 1v2zm0-8c0 .55-.45 1-1 1H5c-.547 0-1-.45-1-1v-2c0-.544.453-1 1-1h2c.55 0 1 .456 1 1v2zm0-8c0 .55-.45 1-1 1H5c-.547 0-1-.45-1-1V7c0-.544.453-1 1-1h2c.55 0 1 .456 1 1v2zm15 16H13c-.55 0-1-.45-1-1s.448-1 1-1h10a1 1 0 010 2zm0-8H13c-.55 0-1-.45-1-1s.448-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1zm0-8H13c-.55 0-1-.45-1-1s.448-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z"
      />
    </Svg>
  );
}

export default BallotIcon;
