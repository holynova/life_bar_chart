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
}

let lb = new LifeBar({ arr: [], canvasWidth: canvasProps.width })

const HomePage: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  const [ready, setReady] = useState(false)
  const [ctx, setCtx] = useState<CanvasRenderingContext2D | null>()
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    initCanvas()
  }, [])

  const initCanvas = useCallback(() => {
    if (canvasRef.current) {
      let myCtx: CanvasRenderingContext2D | null = canvasRef.current.getContext(
        "2d"
      )
      log("initCanvas")
      setReady(true)
      setCtx(myCtx)
    }
  }, [])

  const draw = useCallback(() => {
    if (ctx) {
      ctx.fillStyle = "green"
      lb.rectList.forEach((x) => {
        log("x=", x)

        ctx.fillRect.apply(ctx, x)
      })
      // ctx.fillRect(10, 10, 150, 100)
      // ctx.fillRect(0, 0, canvasProps.width / 2, canvasProps.height / 2)
    } else {
      log("ctx 不存在")
    }
  }, [ctx])

  return (
    <div style={{ width: "1080px", margin: "0 auto", backgroundColor: "#fff" }}>
      <h3>HomePage</h3>
      <canvas
        ref={canvasRef}
        width={canvasProps.width}
        height={canvasProps.height}
        style={canvasProps.style}
      ></canvas>
      {ready ? (
        <div>
          <button onClick={draw}>draw</button>
          <DebugPanel data={lb.getRectList()}></DebugPanel>
        </div>
      ) : (
        <h3>loading</h3>
      )}
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
