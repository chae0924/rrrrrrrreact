import React, { useState } from 'react';

function TextInput() {
  // text의 초기값을 "열기"로 설정
  const [text, setText] = useState('열기');

  // 버튼 클릭 시 텍스트를 변경하는 함수
  const handleChange = () => {
    if (text === '열기') {
      setText('닫기');
    } else {
      setText('열기');
    }
  };

  return (
    <div>
      <button onClick={handleChange}>{text}</button>
    </div>
  );
}

export default TextInput;
