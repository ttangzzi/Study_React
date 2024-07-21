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
        modal == true ? <Modal color={"skyblue"} title={title} woman = {
          ()=> {
            let newTitle = [...title];
            newTitle[0] = "여자 코트 추천";
            setTitle(newTitle);
          }
        }/> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[0]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.woman}>글수정</button>
    </div>
  )
}

export default App;
