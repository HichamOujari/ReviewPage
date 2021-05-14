import React, { Component } from 'react';
import Head from 'next/head'
import style from '../styles/HelpDesk.module.css'
import Nav from "../components/nav"
import Software from "../components/help-desk/software"
import Appointment from "../components/help-desk/appointment"


export default class HelpDesk extends Component {
  Content = [<Software/>,<Appointment/>]
  state = {
    Content : 0
  }
  render() {
    return (
      <div className={style.container}>
        <Head>
          <title>Help Desk</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.main}>
          <Nav ele={3}/>
          <div className={style.Content}>
            <ul className={style.left}>
              <li onClick={()=>{
                this.setState({
                  Content : 0
                })
              }} id="Resource_Soft" className={this.state.Content===0?style.Active:null}>Software</li>
              <li onClick={()=>{
                this.setState({
                  Content : 1
                })
              }} className={this.state.Content===1?style.Active:null} id="Resource_App" >Make Appointment</li>
            </ul>
            {this.Content[this.state.Content]}
          </div>
        </main>
      </div>
    )
  }
}