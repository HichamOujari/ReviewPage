import React, { Component } from 'react';
import Head from 'next/head'
import style from '../styles/Resources.module.css'
import Nav from "../components/nav"
import ContentResources from "../components/resources/ContentResources"
import Link from "next/link"


export default class Resources extends Component {
  sideBarEles = ["New Resources","Annocument","General Information","Campus Access","Health And Weliness","Teaching Online"]
  state = {
    Content:0
  }
  render() {
    return (
      <div className={style.container}>
        <Head>
          <title>Resources</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.main}>
          <Nav ele={1}/>  {/*1 mains the first element in navbar*/}
          <div className={style.Content}>
            <ul className={style.left}>
              {this.sideBarEles.map((ele,index)=>{
                return (<li onClick={()=>{
                    this.setState({
                    Content : index
                  })}} key={index} className={this.state.Content===index?style.Active:null}>{ele}</li>)
              })}
              <p className={style.GetHelp}>Having Troubles? <Link href="/help-desk"><span>Get Help</span></Link></p>
            </ul>
            <ContentResources Content={this.state.Content} />
          </div>
        </main>
      </div>
    )
  }
}