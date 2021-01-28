
//Action Creatorsを作成し
//viewを担当するcomponent側に渡すため「export」する
// export const increment = () => {
//     return
//     {
//         type: 'INCREMENT'
//     }
// }

// export const idecrement = () => {
//     return
//     {
//         type: 'DECREMENT'
//     }
// }

//↑のreturn を↓のように省略してかける
// export const increment = () => ({
//         type: 'INCREMENT'
// })
// export const idecrement = () => ({
//         type: 'DECREMENT'
// })


//Type内の識別子を複数で利用するため変数扱いできる
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'
export const increment = () => ({
    type: INCREMENT
})

export const decrement = () => ({
    type: DECREMENT
})