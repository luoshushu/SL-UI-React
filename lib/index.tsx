import React from "react";
import ReactDOM from "react-dom";
import Icon from './icon/icon'

ReactDOM.render(
  <Icon name="wechat"  onClick={()=>{console.log(1)}}></Icon>
  ,document.getElementById('root'))