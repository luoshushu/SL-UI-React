import React from "react";
import "./importIcon.js"; //导入所有icon

interface IconProps {
  name:string
}

// 声明icon 为函数Component 参数为IconProps
const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return(
  <span>
    <svg>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  </span>
  )
}
export default Icon