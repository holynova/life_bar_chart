import React, {
  useState,
  useCallback,
  useEffect,
  useRef,
  useMemo,
} from "react";

import DebugPanel from "../../../common/components/DebugPanel";
import { log } from "../../../common/utils/debug";
import LifeBar, { BarDataModel } from ".././components/LifeBar";
import { dynastyList, chinaList2, chinaList3 } from "../components/data";
import { mockArr } from "./constants";

// import {} from 'antd'
// import './LifeBarChart.less'
// import  {log} from ''
interface Props {
  folded: boolean;
  dataList: BarDataModel[];
}

let lifeBar: LifeBar;

const LifeBarChart: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  const [ready, setReady] = useState(false);
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const dataList = props.dataList;
  const canvasProps = useMemo(() => {
    const rowHeight = 32;
    const gutter = Math.max(Math.floor(rowHeight / 4), 1);
    return {
      style: {
        // border: "1px solid red",
      },
      gutter,
      rowHeight,
      height: (rowHeight + gutter) * dataList.length,
      width: 1024,
    };
  }, [dataList.length]);
  const initCanvas = useCallback(() => {
    lifeBar = new LifeBar({
      // arr: chinaList3.filter((x) => x.type === "main"),
      arr: dataList,
      canvasWidth: canvasProps.width,
      gutter: canvasProps.gutter,
      rowHeight: canvasProps.rowHeight,
      isMock: false,
      folded: props.folded,
      // isMock: true,
    });
    if (canvasRef.current) {
      let myCtx: CanvasRenderingContext2D | null =
        canvasRef.current.getContext("2d");
      // log("initCanvas")
      setReady(true);
      setCtx(myCtx);
    }
  }, [
    canvasProps.gutter,
    canvasProps.rowHeight,
    canvasProps.width,
    dataList,
    props.folded,
  ]);

  const draw = useCallback(() => {
    if (ctx) {
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvasProps.width, canvasProps.height);
      const fontSize = canvasProps.rowHeight * 0.5;
      ctx.font = `${fontSize}px sans`;
      lifeBar.rectList.forEach((x) => {
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
  }, [canvasProps.height, canvasProps.rowHeight, canvasProps.width, ctx]);

  useEffect(() => {
    initCanvas();
    draw();
  }, [draw, initCanvas, props.folded]);

  return (
    <div style={{ width: "90%", margin: "0 auto", backgroundColor: "#fff" }}>
      {/* <h3>LifeBarChart</h3> */}
      {ready ? (
        <div>
          {/* <button onClick={draw}>draw</button> */}
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
