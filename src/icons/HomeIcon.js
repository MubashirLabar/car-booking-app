import * as React from "react";
import Svg, { Path } from "react-native-svg";

function HomeIcon({ size, color = "#000" }) {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 36 32"
    >
      <Path
        fill={color}
        d="M36 16c0 1.53-1.391 1.944-2.001 1.944-.467 0-.937-.162-1.317-.494L18 4.659 3.318 17.506c-.381.331-.85.494-1.317.494-.529 0-2-.419-2-2a2 2 0 01.682-1.506L16.627.55a1.995 1.995 0 012.634 0l15.944 13.944c.626.45.795 1.044.795 1.506z"
      />
      <Path
        fill={color}
        opacity={0.4}
        d="M31.944 16.906V30a2 2 0 01-2 2h-5.999c-1.104 0-1.944-.896-1.944-2v-7c0-.552-.448-.944-1-.944H15c-.552 0-.999.448-.999.944L14 30a2 2 0 01-2 2H6.001a2 2 0 01-2-2l.001-13.094L18 4.658l13.944 12.248z"
      />
    </Svg>
  );
}

export default HomeIcon;
