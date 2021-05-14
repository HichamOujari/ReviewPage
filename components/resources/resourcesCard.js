import React, { Component } from 'react';
import style from '../../styles/Resources.module.css'
import StarBorderSharpIcon from '@material-ui/icons/StarBorderSharp';


export default class ResourcesCard extends Component {
  render() {
    return (
      <div className={style.ResourcesCard}>
          <div className={style.title_Star}>
            <p className={style.title}>{this.props.data.title}</p>
            <StarBorderSharpIcon className={style.Icon}/>
          </div>
          <p className={style.desc}>{this.props.data.desc}</p>
          <p className={style.type}>{this.props.data.type}</p>
          <p className={style.date}>{this.props.data.date}</p>
      </div>
    );
  }
}
