import { useState } from 'react';
import './menu.css';

function Menu() {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  const menuItems = ['首頁', '關於我們', '產品'];
  return (
    <>
      <ul>
        {menuItems.map((item, index) => {
          return (
            <li key={index}>
              {/* key是react內建的 */}
              <a
                href="#/"
                onClick={() => {
                  setSelectedIndex(index);
                }}
                className={selectedIndex === index ? 'active' : ''}
                //內聯式if 用&& =>true才執行 false不執行
                //內聯式只能在react的JSX裡用
                //三元式if 用?跟: => true執行這邊的程式 : false執行這邊的程式
              >
                {item}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Menu;
