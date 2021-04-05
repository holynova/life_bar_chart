import React, { useState, useCallback, useEffect, useRef } from "react"
import LifeBarChart from "./components/LifeBarChart"
// import {} from 'antd'
// import './HomePage.less'
// import  {log} from ''
interface Props {}

const HomePage: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  return (
    <div className="HomePage">
      <h3>HomePage</h3>
      <LifeBarChart></LifeBarChart>
    </div>
  )
}

export default HomePage
