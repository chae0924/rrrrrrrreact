import React from 'react'
import Home from './component/content/Home';
import {Router, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <nav>
      <ul style={{display : "flex"}}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/board">Board</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>

    <div className='content'>


      <Routes>
        <Route path="/" element={<Home  bgcolor="red" textcolor="white" vh="100vh" childcolor="blue">구매자분들의 솔직 리뷰✨</Home>}></Route>
        <Route path="/board" element={<Home  bgcolor="gray" textcolor="white" vh="100vh" childcolor="blue">
        자식이라고 합니다
      </Home>}></Route>
        <Route path="/contact" element={ <Home  bgcolor="yellow" textcolor="black" vh="100vh" childcolor="blue">
        아~~~~~~~~ 이렇게 해서 하나의 컴포넌트를 가지고 가성비있게 쓰는군요~~~!!!!
        이!거@시! 리액트!!!!!!!!!!!!!!!!!!!!!!!!!!
      </Home>}></Route>
      </Routes>

      
      

    </div>
    </div>
  )
}
