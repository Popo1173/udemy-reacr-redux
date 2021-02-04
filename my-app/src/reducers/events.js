//配列を編集してくれるパッケージ
import _ from 'lodash'
import { READ_EVENTS } from '../actions'

export default (events = {}, action) => {    
    switch(action.type) {
        case READ_EVENTS:
            //response.data は配列にオブジェクトが入ってきているデータ
            //[
                //{id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
                //{id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            //]
            // stateで管理すると↑のデータの取得方法になり、全てオブジェクトをスキャンしなければいけないので、
            //{ 以下のようにIDをkeyにできるようにする
                //1: {id: 1, title: "Let's have an event 1!", body: "This is the body for event 1."}
                //2: {id: 2, title: "Let's have an event 2!", body: "This is the body for event 2."}
            //}

            //配列の中にオブジェクトを入れている
            // console.log(action.response.data)
            //idをkeyにして、オブジェクトを返す
            // console.log(_.mapKeys(action.response.data, 'id'))
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
        }
}
 