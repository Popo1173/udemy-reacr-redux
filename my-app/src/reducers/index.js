//全てのreducerを総括する　全てのReducerを結合する

//Reducersを結合する関数
import { combineReducers } from 'redux'

//countの状態をもつreducersをインポート
import count from './count'

export default combineReducers({ count })
//複数の状態を管理した場合は、以下のようにする
// export default combineReducers({ foo, bar, baz })
