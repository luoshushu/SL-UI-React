import React from "react";
import "./importIcon.js"; //导入所有icon
import "./icon.scss"

interface IconProps {
  name:string
}

// 声明icon 为函数Component 参数为IconProps
const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return(
    <svg  className="icon">
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}
export default Icon