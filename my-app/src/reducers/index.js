//全てのreducerを総括する　全てのReducerを結合する

//Reducersを結合する関数
import { combineReducers } from 'redux'

//eventsの状態をもつreducersをインポート
import events from './events'

export default combineReducers({ events })
