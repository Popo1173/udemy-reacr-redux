//classComponent をインポート
import React, { Component } from 'react'

const App = () => ( <Counter></Counter> )

//Counter クラスを呼び出しインスタンスが作成される
class Counter extends Component {
  //constructorメソッドを呼び出して初期化
  constructor(prpos){
    super(prpos)
    //オブジェクトを作成する
    this.state = {count: 0}
  }

  //handlePluseButton 関数
  handlePluseButton = () => {
    // console.log("クリック")
    // const currentCount = this.state.count
    // this.setState({count: currentCount +1 })
    // console.log(this.state.count)

    //状態更新する
    //「this.state.count」 
    //「this.state」はCounterComponentで管理しているSTATE
    //「.count」はオブジェクト
    this.setState({count: this.state.count +1 })
  }
  handleMinasuButton = () =>{
    this.setState({count: this.state.count -1 })
  }




  //renderでdiv要素を描画する
  render(){
    return (
      <React.Fragment>
        <div>count: {this.state.count }</div>
        <button onClick={this.handlePluseButton}>+1</button>
        <button onClick={this.handleMinasuButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;