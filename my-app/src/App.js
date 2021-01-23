
//JSXを利用する際は、　import　react　が必要になる
// import React, { Component } from 'react'

//Appというクラスがコンポーネントを継承している
// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={()=> {console.log('クリック')}}/>
//       </React.Fragment>
//     )
//   }
// }

import React from 'react'
const App = () => {
  return (
    <div>
    <Cat />
    <Cat />
    <Cat />
    </div>
  )
}

const Cat =() => {
  return <div>MEOW!!!</div>
}





export default App;
