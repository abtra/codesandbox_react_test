/*eslint react-hooks/exhaustive-deps:off*/

import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

export const App = () => {
  const [num, setNum] = useState(0); //配列の分割代入で変数と変数のセッターを取得
  const [faceShowFalg, setFaceShowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFalg);
  };
  useEffect(() => {
    if (num > 0) {
      if (num % 3 === 0) {
        faceShowFalg || setFaceShowFlag(true);
      } else {
        faceShowFalg && setFaceShowFlag(false);
      }
    }
    /*eslint react-hooks/exhaustive-deps:off*/
  }, [num]); //numが変化したときに処理が起こる.[]なら最初の一回のみ処理が起こる。

  // const contentLedyStyle = {
  //   color: "pink",
  //   fontSize: "18px"
  // };

  return (
    //<React.Fragment></React.Fragment> => <></>でも可
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      {/* <p style={contentLedyStyle}>元気です！</p> */}
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>カウント数：{num}</p>
      {faceShowFalg && <p>(oﾟ▽ﾟ)o</p>}
    </>
  );
};

//export default App;
