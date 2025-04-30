import { useState } from 'react';
import './index.css';
import Message from './Message';

function App() {
  const [count, setCount] = useState(0);
  const [countAll, setCountAll] = useState(0);

  return (
    <div className="App">
      <h1>React カウンター</h1>
      <h2>ボタンを押してカウントしよう</h2>
      <p>カウント: {count}</p>
      <button onClick={() => 
        {
          setCount(count - 1);
          setCountAll(countAll + 1);
        }}>
      減らす↓
      </button>
      <button onClick={() => 
        {
          setCount(count + 1);
          setCountAll(countAll + 1);
        }}>
      増やす↑
      </button>
      {count === 5 && <p>+5だよ！</p>}
      {count === 10 && <p>+10だよ！</p>}
      <Message hoge="ホゲホゲ" text="これは子コンポーネントです！" hikaru="ひかるです"/>
      <p class="allcount">全てのカウント(ボタンを押した回数): {countAll}</p>
    </div>
    
  );
}

export default App;