import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color, //JSオブジェクトとして扱うため""で囲む
    fontSize: "18px" //font-sizeではなくパスカルケース
  };
  return <p style={contentStyle}>{children}</p>;
};

//export default ColorfulMessage;
