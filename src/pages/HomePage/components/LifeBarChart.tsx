import React, { useState, useCallback, useEffect, useRef } from "react";

import DebugPanel from "../../../common/components/DebugPanel";
import { log } from "../../../common/utils/debug";
import LifeBar from ".././components/LifeBar";
import { dynastyList, chinaList2, chinaList3 } from "../components/data";
import { mockArr } from "./constants";

// import {} from 'antd'
// import './LifeBarChart.less'
// import  {log} from ''
interface Props {}
const dataList = chinaList2;

const rowHeight = 32;
const gutter = Math.max(Math.floor(rowHeight / 4), 1);
const canvasProps = {
  width: 1000,
  style: {
    border: "1px solid red",
  },
  gutter,
  rowHeight,
  height: (rowHeight + gutter) * dataList.length,
};

let lb: LifeBar;

const LifeBarChart: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  const [ready, setReady] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    initCanvas();
    draw();
  }, []);

  const initCanvas = useCallback(() => {
    lb = new LifeBar({
      arr: chinaList3.filter((x) => x.type === "main"),
      canvasWidth: canvasProps.width,
      gutter: canvasProps.gutter,
      rowHeight: canvasProps.rowHeight,
      isMock: false,
      folded: true,
      // isMock: true,
    });
    if (canvasRef.current) {
      let myCtx: CanvasRenderingContext2D | null =
        canvasRef.current.getContext("2d");
      // log("initCanvas")
      setReady(true);
      setCtx(myCtx);
    }
  }, []);

  const draw = useCallback(() => {
    if (ctx) {
      // lb = new LifeBar({
      //   arr: [],
      //   canvasWidth: canvasProps.width,
      //   gutter: canvasProps.gutter,
      //   rowHeight: canvasProps.rowHeight,
      // })
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasProps.width, canvasProps.height);
      const fontSize = canvasProps.rowHeight * 0.5;
      ctx.font = `${fontSize}px sans`;
      lb.rectList.forEach((x) => {
        // log("x=", x)
        ctx.fillStyle = x.color;
        ctx.strokeRect.apply(ctx, x.rect);
        ctx.fillRect.apply(ctx, x.rect);
        ctx.fillStyle = "#000";
        ctx.fillText(
          x.text,
          x.rect[0] + 4,
          x.rect[1] + canvasProps.rowHeight / 2 + fontSize / 2,
          // x.rect[1]
        );
      });
      // ctx.fillRect(10, 10, 150, 100)
      // ctx.fillRect(0, 0, canvasProps.width / 2, canvasProps.height / 2)
    } else {
      log("ctx 不存在");
    }
  }, [ctx]);

  return (
    <div style={{ width: "90%", margin: "0 auto", backgroundColor: "#fff" }}>
      {/* <h3>LifeBarChart</h3> */}
      {ready ? (
        <div>
          <button onClick={draw}>draw</button>
          {/* <DebugPanel data={lb?.rectList}></DebugPanel> */}
        </div>
      ) : (
        <h3>loading</h3>
      )}
      <canvas
        ref={canvasRef}
        width={canvasProps.width / 0.8}
        height={canvasProps.height}
        style={canvasProps.style}
      ></canvas>

      {/* {
    lb.list.map(x => {
      return <DebugPanel data={x} key={x.name}></DebugPanel>
    }) 
  }
  {
    lb.list.map(x =><li key={x.name} >{x.name}</li>)
  } */}
    </div>
  );
  // return (
  //   <div className='LifeBarChart'>
  //     <h3>LifeBarChart</h3>
  //   </div>
  // )
};

export default LifeBarChart;
