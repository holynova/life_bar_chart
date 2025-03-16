import React, { useState, useCallback, useEffect, useRef } from "react";
// import {} from 'antd'
// import './DebugPanel.less'
// import  {log} from ''
import CSS from "csstype";
interface Props {
  data: any;
}

const style: CSS.Properties = {
  overflow: "auto",
  backgroundColor: "#FFE",
  fontSize: "12px",
  maxHeight: "300px",
};

const DebugPanel: React.FC<Props> = (props) => {
  // const [count, setCount] = useState(0)
  return <pre style={style}>{JSON.stringify(props.data, null, 2)}</pre>;
  // return (
  //   <div className='DebugPanel'>
  //     <h3>DebugPanel</h3>
  //   </div>
  // )
};

export default DebugPanel;
