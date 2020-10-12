import React from "react";
import "./importIcon.js"; //导入所有icon
import "./icon.scss"

// IconProps 继承SVGAttributes 接收SVGAElement或HTMLElement
interface IconProps extends React.SVGAttributes<SVGElement> {
  name:string,
  onClick:React.MouseEventHandler<SVGElement>
}

// 声明icon 为函数Component 参数为IconProps
const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return(
    <svg  className="icon" {...props}>
      <use xlinkHref={`#${props.name}`}></use>
    </svg>
  )
}
export default Icon