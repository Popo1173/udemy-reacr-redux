//classComponent をインポート
import React, { Component } from 'react'

import { connect } from 'react-redux'

import {increment, decrement } from '../actions'

//Counter クラスを呼び出しインスタンスが作成される
class App extends Component {

  //renderでdiv要素を描画する
  render(){
    const props = this.props

    return (
      <React.Fragment>
        <div>count: {props.value }</div>
        <button onClick={props.increment}>+1</button>
        <button onClick={props.decrement}>-1</button>
      </React.Fragment>
    )
  }
}

//stateの情報からコンポーネントの必要なものを取り出してマッピングする
const mapStateTopProps = state => ( {value: state.count.value} )

//アクションが発生した時に、Reducerにタイプに応じた関数を実行させる
// const mapDispatchToProps = dispatch => ({
//   increment: () => dispatch(increment()),
//   decrement: () => dispatch(decrement()),
// })

const mapDispatchToProps = ({ increment, decrement })

export default connect(mapStateTopProps, mapDispatchToProps)(App)

