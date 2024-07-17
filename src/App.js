import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0,0,0]);
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

      {
        title.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                modal == true ? setModal(false) : setModal(true);
              }}>{title[i]}</h4>
              <span onClick={()=>{
                let newLike = [...like];
                newLike[i] += 1;
                setLike(newLike);
              }}> 👍</span> {like[i]}
              <p>7월 17일 작성</p>
            </div>
          )
        })
      }

      {
        modal == true ? <Modal title="제목" date="7월 16일 발행"/> : null
      }
    </div>
  );
}

function Modal({title, date}) {
  return (
    <div className="modal">
      <h4>{title}</h4>
      <p>{date}</p>
      <p>상세내용</p>
    </div>
  )
}

export default App;
