import React from 'react'

//proptypeをインポートする
import PropTypes from 'prop-types'

const App = () => {
  const profiles = [
    {name: "TARO", age: 10},
    {name: "HANAKO", age: 5},
    {name: "Noname"}
  ]

  return (
    <div>
      {
        profiles.map((profile, index)=> {
          return <User name={profile.name}　age={profile.age} key={index}/>
        })
        
      }
    </div>
  )
}
const User =(props) => {
  return <div>Hi Iam {props.name}, and {props.age} years old!!</div>
}

//propsの型を指定することで、異なる型が渡ってきたらエラーを返せるようにする
User.propTypes = {
  //name はstring型で受け取ることを指定する
  name: PropTypes.string,
  //ageという属性を受け取る事を必須にする
  age:PropTypes.number.isRequired
}


export default App;