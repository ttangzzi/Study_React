import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, b] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <div className="list">
        <h4>{title[0]}</h4>
        <p>7월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[1]}</h4>
        <p>7월 16일 발행</p>
      </div>
      <div className="list">
        <h4>{title[2]}</h4>
        <p>7월 16일 발행</p>
      </div>
    </div>
  );
}

export default App;
