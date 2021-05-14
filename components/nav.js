import React, { Component } from 'react';
import style from "../styles/nav.module.css"
import Link from "next/link"
import NotificationsNoneOutlinedIcon from '@material-ui/icons/NotificationsNoneOutlined';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';
export default class Nav extends Component {
  navEles = [
    {
      title :"Home",
      path:"/"
    },{
      title :"Resources",
      path:"/resources"
    },{
      title :"Discussion",
      path:"/discussion"
    },{
      title :"Help Desh",
      path:"/help-desk"
    },{
      title :"FeedBack",
      path:"/feedBack"
    },
  ]
  render() {
    return (
      <div className={style.Nav}>
          <MenuIcon className={style.MenuIcon}/>
          <ul className={style.left}>
            {this.navEles.map((ele,index)=>{
              if(index==this.props.ele){
                return (<Link key={index}  href={ele.path}><li className={style.Active}>{ele.title}</li></Link>)
              }else{
                return (<Link key={index}  className={style.Active} href={ele.path}><li>{ele.title}</li></Link>)
              }
            })}
          </ul>
          <ul className={style.right}>
              <li><NotificationsNoneOutlinedIcon /></li>
              <li><PersonOutlineIcon /></li>
              <li>Sign out</li>
          </ul>
      </div>
    );
  }
}
