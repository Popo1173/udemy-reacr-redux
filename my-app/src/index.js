import React from 'react';
import ReactDOM from 'react-dom';

import { createStore } from 'redux'
//アプリケーションから
import { Provider } from 'react-redux'
 
import './index.css';
//作成したReducerをインポートする
import reducer from './reducers'

import App from './components/App';
import reportWebVitals from './reportWebVitals';

//全てのstateがstoreで集約される
const store = createStore(reducer)

ReactDOM.render(
  //アプリケーション内の全階層のコンポーネントでstoreが利用可能になる。
  //providerを使うことで親から子へのpropsの受け渡しをしなくてすむ
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
