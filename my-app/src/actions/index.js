 //http clientのインポート
import axios from 'axios'

export const READ_EVENTS = 'READ_EVENTS'


const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

//外部のサーバにリクエストを投げる
//readEventの中はピュアなオブジェクトしかはいらないが処理も入れるようにするのがredux-thunk
//関数の中でdispacthできる
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    console.log(response)
    dispatch({type: READ_EVENTS, response})
}

