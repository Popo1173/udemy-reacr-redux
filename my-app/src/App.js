// import logo from './logo.svg';
// import './App.css';
// import { render } from '@testing-library/react';


import React, { Component } from 'react'
//JSXを利用する際は、　import　react　が必要になる

class App extends Component {
  render(){
    //こんな書き方もできる
    // const dom = <h1>Hi</h1>
    // return dom

      // return (
      //   <div>
      //     Hellow, World
      //   </div>
      // );
      //JSX は以下のように変換される
      // return React.createElement(
      //   "div",
      //   null,
      //   "hellow, world"
      // )

     //claa はjsの予約言と被ってしまうため、classNameとなっている。
    // const greeting = "Hi TOM"
    // const dom = <h1 className=''>{greeting}</h1>
    // return dom
    
    // return <input type="text" onClick={()=> {console.log('クリック')}}/>
    
    //onChange  値の状態が変化することで
    // return <input type="text" onChange={()=> {console.log('クリック')}}/>


    //returnで返すJSXは一つのタグでくくらないとシンタックスエラーになる
    //だが、利用したくないタグを入れることになってしまう。
    // return (
    //   <div>
    //     <label htmlFor="bar">bar</label>
    //     <input type="text" onChange={()=> {console.log('クリック')}}/>
    //   </div>
    // )

    // そこで<React.Fragment>を利用することで、意図としないタグを入れないようにする。
    return (
      <React.Fragment>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={()=> {console.log('クリック')}}/>
      </React.Fragment>
    )
    
    

  }
}

  // 書き方色々







export default App;
