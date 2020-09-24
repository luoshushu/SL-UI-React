import React from "react";

interface IconProps {
  name:string
}

// 声明icon 为函数Component 参数为IconProps
const Icon:React.FunctionComponent<IconProps> = (props)=>{
  return(
  <span>{props.name}</span>
  )
}
export default Icon