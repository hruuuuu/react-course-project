//funcitonal component
import { useState } from 'react'; //是一個hook
/* use開頭是react的內建hook
{}是部分引用
*/

//檔案名稱、函式名稱、export跟index.js裡的import名稱要一致
function FC() {
  /*hook勾子是一對的 [total, setTotal]
  useState是呼叫() 執行後會回傳一個陣列 [getter 值, setter設值]
  再利用解構賦值的特性對應到total跟setTotal
  useState(裡面放預設值)*/
  const [total, setTotal] = useState(0);
  /*
  <></>這個叫做fragment
  等於<React.Fragment></React.Fragment>
  只會在開頭跟結尾有
  用來框住很多階層*/
  return (
    <>
      <h1
        /*人造事件onClick
      用來做事件處理都是onVerb的寫法
      onVerb = {裡面放函式(建議先寫箭頭函式)}
      在JSX裡面 花括號{}裡面要放js值或是表達式
      */
        onClick={() => {
          //按下之後執行setTotal這個function
          setTotal(total + 1);
        }}
      >
        {total}
      </h1>
      <button>+1</button>
      <button>-1</button>
    </>
  );
}

export default FC;
