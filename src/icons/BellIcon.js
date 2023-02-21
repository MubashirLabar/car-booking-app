import * as React from "react";
import Svg, { Path } from "react-native-svg";

function BellIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 28 32"
    >
      <Path fill={color} d="M18 28c0 2.211-1.789 4-4 4s-4-1.788-4-4h8z" />
      <Path
        fill={color}
        opacity={0.4}
        d="M27.462 22.644c-1.203-1.297-3.469-3.25-3.469-9.644 0-4.859-3.399-8.744-7.994-9.694V2c0-1.101-.899-2-2-2s-2 .899-2 2v1.305C7.405 4.258 4.007 8.144 4.007 13c0 6.394-2.266 8.344-3.469 9.644A1.976 1.976 0 00-.001 24c.008 1.024.813 2 2.008 2h23.987c1.195 0 2-.976 2.008-2a1.997 1.997 0 00-.541-1.356z"
      />
    </Svg>
  );
}

export default BellIcon;
