import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [like, setLike] = useState(0);
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      <button onClick={()=>{
        let newTitle = [...title];
        newTitle.sort();
        setTitle(newTitle);
      }}>정렬</button>
      <div className="list">
        <span onClick={()=>{
          let copy = [...title];
          copy[0] = '여자 코트 추천'
          setTitle(copy);
        }}>👚</span>
        <span onClick={()=>{
          let copy = [...title];
          copy[0] = '남자 코트 추천'
          setTitle(copy);
        }}>👕</span>
        <h4>{title[0]} <span onClick={()=>{
          setLike(like+1)
        }}>👍</span> {like} </h4>
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
