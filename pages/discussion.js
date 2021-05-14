import React, { Component } from 'react';
import Head from 'next/head'
import style from '../styles/Discussion.module.css'
import Nav from "../components/nav"


export default class Discussion extends Component {
  render() {
    return (
      <div className={style.container}>
        <Head>
          <title>Discussion</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className={style.main}>
          <Nav ele={2}/>  {/*2 mains the first element in navbar*/}
          <div className={style.Content}>
            
          </div>
        </main>
      </div>
    )
  }
}