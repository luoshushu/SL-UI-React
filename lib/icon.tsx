import React from "react";
import "./importIcon.js"; //导入所有icon
import "./icon.scss"
import classes from "./helpers/classes";

// IconProps 继承SVGAttributes 接收SVGAElement或HTMLElement
interface IconProps extends React.SVGAttributes<SVGElement> {
  name: string
}

// 声明icon 为函数Component 参数为IconProps
const Icon: React.FunctionComponent<IconProps> = ({className,name,...restProps}) => {
  return (
    <svg className={classes('sl-icon',className)} 
      {...restProps}>
      <use xlinkHref={`#${name}`}></use>
    </svg>
  )
}
export default Icon