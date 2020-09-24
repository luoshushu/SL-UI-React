import React from "react";
import weChat from "../icons/weChat.svg";

console.log(weChat);

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