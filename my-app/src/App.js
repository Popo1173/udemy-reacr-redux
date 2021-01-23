import React from 'react'

const App = () => {

  //簡略化するためにmap 関数を使う
  const profiles = [
    {name: "TARO", age: 10},
    {name: "HANAKO", age: 5},
    {name: "NoName"}
  ]

  return (
    <div>
      {
        //profiles配列をmap関数で管理し引数「profile」に渡す
        //Warning: Each child in a list should have a unique "key" prop.
        // ⇨　仮想DOMを使うためユニークなkeyが必要になると注意されるため、引数にindexを入れる
        // どこからどこまでを描画する指示をkeyで行うため
        profiles.map((profile, index)=> {
          //profileの値をUserコンポーネントに渡す
          //key をindex で管理
          return <User name={profile.name}　age={profile.age} key={index}/>
        })
        
      }
    {/* propsでデータを受け取る */}
    {
    /* <User name={"TARO"}　age={10}/>
    <User name={"HANAKO"}　age={5}/> */
    }
    </div>
  )
}
//props で値を受け取る
const User =(props) => {
  return <div>Hi Iam {props.name}, and {props.age} years old!!</div>
}

//propsを受け取るコンポーネントにデフォルトpropsを用意しておく
User.defalutProps = {
  age: 1
}

export default App;