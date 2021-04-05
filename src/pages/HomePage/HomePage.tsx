import React, { useState, useCallback, useEffect, useRef } from "react"

import DebugPanel from "../../common/components/DebugPanel"
import { log } from "../../common/utils/debug"
import LifeBar from "./components/LifeBar"

// import {} from 'antd'
// import './HomePage.less'
// import  {log} from ''
interface Props {}

const canvasProps = {
  width: 1000,
  height: 800,
  style: {
    border: "1px solid red",
  },
  gutter: 10,
  rowHeight: 32,
}

let lb: LifeBar

const HomePage: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  const [ready, setReady] = useState(false)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    initCanvas()
    draw()
  }, [])

  const initCanvas = useCallback(() => {
    lb = new LifeBar({
      arr: [],
      canvasWidth: canvasProps.width,
      gutter: canvasProps.gutter,
      rowHeight: canvasProps.rowHeight,
    })
    if (canvasRef.current) {
      let myCtx: CanvasRenderingContext2D | null = canvasRef.current.getContext(
        "2d"
      )
      // log("initCanvas")
      setReady(true)
      setCtx(myCtx)
    }
  }, [])

  const draw = useCallback(() => {
    if (ctx) {
      lb = new LifeBar({
        arr: [],
        canvasWidth: canvasProps.width,
        gutter: canvasProps.gutter,
        rowHeight: canvasProps.rowHeight,
      })
      ctx.fillStyle = "green"
      const fontSize = canvasProps.rowHeight * 0.5
      ctx.font = `${fontSize}px sans`
      lb.rectList.forEach((x) => {
        // log("x=", x)
        ctx.fillStyle = x.color
        ctx.strokeRect.apply(ctx, x.rect)
        ctx.fillRect.apply(ctx, x.rect)
        ctx.fillStyle = "#000"
        ctx.fillText(
          x.text,
          x.rect[0] + 4,
          x.rect[1] + canvasProps.rowHeight / 2 + fontSize / 2
          // x.rect[1]
        )
      })
      // ctx.fillRect(10, 10, 150, 100)
      // ctx.fillRect(0, 0, canvasProps.width / 2, canvasProps.height / 2)
    } else {
      log("ctx 不存在")
    }
  }, [ctx])

  return (
    <div style={{ width: "1080px", margin: "0 auto", backgroundColor: "#fff" }}>
      {/* <h3>HomePage</h3> */}
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
        width={canvasProps.width}
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
  )
  // return (
  //   <div className='HomePage'>
  //     <h3>HomePage</h3>
  //   </div>
  // )
}

export default HomePage
