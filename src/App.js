/* eslint-disable */
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  let [title, setTitle] = useState(['남자 코트 추천', '강남 우동맛집', '파이썬 독학']);
  let [modal, setModal] = useState(false);
  let [like, setLike] = useState([0,0,0]);
  let [modalTitle, setModalTitle] = useState(0);
  let [inputValue, setInputValue] = useState('');
  return (
    <div className="App">
      <div className="black-nav">
        <h4>블로그</h4>
      </div>
      {/* 정렬 기능 */}
      <button onClick={()=>{
        let newTitle = [...title];
        newTitle.sort();
        setTitle(newTitle);
      }}>정렬</button>

      {
        // 반복문 사용
        title.map((a, i)=>{
          return (
            <div className="list" key={i}>
              <h4 onClick={()=>{
                modal == true ? setModal(false) : setModal(true);
                setModalTitle(i);
              }}>{title[i]}<span onClick={(e)=>{
                e.stopPropagation();
                let newLike = [...like];
                newLike[i] += 1;
                setLike(newLike);
              }}> 👍</span> {like[i]}</h4>
              <button onClick={()=>{
                let newTitle = [...title];
                newTitle.splice(i,1);
                setTitle(newTitle);
              }}>삭제</button>
              <p>7월 17일 작성</p>
            </div>
          )
        })
      }

      <input onChange={
        (e)=> {setInputValue(e.target.value);
        }}/>
      <button onClick={()=>{
        let newTitle = [...title];
        newTitle.unshift(inputValue);
        setTitle(newTitle);
      }}>생성</button>

      {
        // 삼항연산자 / 인자 넘겨주기
        modal == true ? <Modal color={"skyblue"} title={title} woman = {
          ()=> {
            let newTitle = [...title];
            newTitle[0] = "여자코트 추천"
            setTitle(newTitle);
          }
        } modalTitle={modalTitle} /> : null
      }
    </div>
  );
}

function Modal(props) {
  return (
    <div className="modal" style={{background : props.color}}>
      <h4>{props.title[props.modalTitle]}</h4>
      <p>날짜</p>
      <p>상세내용</p>
      <button onClick={props.woman}>글수정</button>
    </div>
  )
}

export default App;
