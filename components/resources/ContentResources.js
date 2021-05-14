import React, { Component } from 'react';
import style from '../../styles/Resources.module.css'
import TuneSharpIcon from '@material-ui/icons/TuneSharp';
import FormatListBulletedSharpIcon from '@material-ui/icons/FormatListBulletedSharp';
import ResourcesCard from "./resourcesCard"
import DashboardSharpIcon from '@material-ui/icons/DashboardSharp';

export default class ContentResources extends Component {
    sideBarEles = ["New Resources","Annocument","General Information","Campus Access","Health and Wellness","Teaching Online"]
    listResources = [
        {
            title : "Tips and tricks on Google Drive",
            desc : "Google Drive is a cloud storage solution with 15GB of storage available for free and paid plans with additional storage and features. Google Drive is a…",
            type:"Teaching Online",
            date: "4th July 2020 | 4:25 PM"
        },
        {
            title:"23 Essential Tips for Working Remotely",
            desc:"Cut yourself some slack. Working from home can be a big transition. You might feel any combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — ",
            type : "Health and Wellness",
            date :"4th July 2020 | 4:25 PM"
        },{
            title:"Stay Connected While Working from Home and Remotely",
            desc:"Times being what they are, you may have found that you’re suddenly leading a remote team, and now you’re wondering how to lead from",
            type:"Health and Wellness",
            date:"4th July 2020 | 4:25 PM"
        },{
            title : "Tips and tricks on Google Drive",
            desc : "Google Drive is a cloud storage solution with 15GB of storage available for free and paid plans with additional storage and features. Google Drive is a…",
            type:"Teaching Online",
            date: "4th July 2020 | 4:25 PM"
        },
        {
            title:"23 Essential Tips for Working Remotely",
            desc:"Cut yourself some slack. Working from home can be a big transition. You might feel any combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — ",
            type : "Health and Wellness",
            date :"4th July 2020 | 4:25 PM"
        },{
            title:"Stay Connected While Working from Home and Remotely",
            desc:"Times being what they are, you may have found that you’re suddenly leading a remote team, and now you’re wondering how to lead from",
            type:"Health and Wellness",
            date:"4th July 2020 | 4:25 PM"
        },{
            title : "Tips and tricks on Google Drive",
            desc : "Google Drive is a cloud storage solution with 15GB of storage available for free and paid plans with additional storage and features. Google Drive is a…",
            type:"Teaching Online",
            date: "4th July 2020 | 4:25 PM"
        },
        {
            title:"23 Essential Tips for Working Remotely",
            desc:"Cut yourself some slack. Working from home can be a big transition. You might feel any combination of lonely, isolated, stressed, frustrated, anxious, unmotivated, or — ",
            type : "Health and Wellness",
            date :"4th July 2020 | 4:25 PM"
        },{
            title:"Stay Connected While Working from Home and Remotely",
            desc:"Times being what they are, you may have found that you’re suddenly leading a remote team, and now you’re wondering how to lead from",
            type:"Health and Wellness",
            date:"4th July 2020 | 4:25 PM"
        },
    ]
  render() {
    return (
      <div className={style.ContentResources}>
          <ul className={style.Icons}>
              <li><FormatListBulletedSharpIcon /></li>
              <li><DashboardSharpIcon /></li>
              <li><TuneSharpIcon /></li>
          </ul>
          <div className={style.Elements}>
            {this.listResources.map((ele,index)=>{
                if(this.props.Content==0 || this.sideBarEles[this.props.Content]===ele.type){
                    return (<ResourcesCard data={ele} key={index} />)
                }
            })}
          </div>
      </div>
    );
  }
}
