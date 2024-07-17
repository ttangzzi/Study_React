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
      <List title={title[0]} date="7월 16일 발행"/>
      <List title={title[1]} date="7월 16일 발행"/>
      <List title={title[2]} date="7월 16일 발행"/>
      <Modal/>
    </div>
  );
}

function List({title, date}) {
  return (
    <div className="list">
    <h4>{title}</h4>
    <p>{date}</p>
  </div>
  )
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
