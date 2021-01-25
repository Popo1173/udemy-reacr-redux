//Action Typeをインポート
import { INCREMENT, DECREMENT } from '../action'

const initialState = { value: 0 }

export default (state = initialState, action) => {
    switch(action.type) {
        case INCREMENT:
            return {value: value.state + 1}
        case DECREMENT:
            return {value: value.state - 1}
        default:
            return state
        }
}