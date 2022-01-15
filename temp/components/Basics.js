function Basics() {
  return (
    <>
      <h2>布林值</h2>
      {/* 布林值在JSX裡面會被當作沒看到 不會render出來*/}
      {true}
      {false}
      <h2>null跟undefined</h2>
      {/* null跟undefined在JSX裡面會被當作沒看到 不會render出來*/}
      {null}
      {undefined}
      <h2>數字</h2>
      {/* JSX裡面有斷行 但在網頁上會是兩段字串 但是不會分行 */}
      {123}
      {123 + 1}
      <h2>字串</h2>
      {'abc'}
      <h2>陣列</h2>
      {/* JSX裡放陣列 會把所有元素列出來 */}
      {[1, 2, 3]}
      {[1, 2, '123']}
      {[0, 0, true]}
      <h2>物件</h2>
      {/* 直接在JSX裡面放物件會壞掉 */}
      {/* {{ a: 1, b: 2 }} */}
      <h2>函式</h2>
      {/* 函式在JSX裡面會被當作沒看到 不會render出來*/}
      {() => {
        console.log(123);
      }}
    </>
  );
}

export default Basics;
