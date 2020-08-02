import * as React from "react";

function SvgUnslotted(props) {
  return (
    <svg width={40} height={40} {...props}>
      <g
        data-name="Ellipse 70"
        fill="#fff"
        stroke="#707070"
        strokeDasharray={8}
      >
        <circle cx={20} cy={20} r={20} stroke="none" />
        <circle cx={20} cy={20} r={20} fill="none" />
      </g>
    </svg>
  );
}

export default SvgUnslotted;
