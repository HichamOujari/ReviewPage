import React, { Component } from 'react';
import Head from 'next/head'
import style from '../styles/Home.module.css'
import Nav from "../components/nav"


export default class Home extends Component {
  render() {
    return (
      <div className={style.container}>
        <Head>
          <title>Home</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.main}>
          <Nav ele={0}/>  {/*0 mains the first element in navbar*/}
          <div className={style.Content}>
            
          </div>
        </main>
      </div>
    )
  }
}