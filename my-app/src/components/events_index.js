//classComponent をインポート
import React, { Component } from 'react'

import { connect } from 'react-redux'

import { readEvents } from '../actions'

//lodashのimport
import _ from 'lodash'

//EventsIndexcomponenet 初期マウント時にイベント一覧をテーブル構造で出力する
class EventsIndex extends Component {

  //実行する時に外部APIサーバーからイベントを取得する
  componentDidMount(){
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }


  render(){
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>
          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    )
  }
}

//stateの情報からコンポーネントの必要なものを取り出してマッピングする
const mapStateTopProps = state => ( { events: state.events } )

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateTopProps, mapDispatchToProps)(EventsIndex)

