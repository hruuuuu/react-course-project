import { data } from '../data/index.js';

function ArrayMap() {
  return (
    <>
      <table border="1">
        <tbody>
          <tr>
            <th>id</th>
            <th>name</th>
            <th>birth</th>
          </tr>
          {data.map((item, index) => {
            return (
              //注意記得寫return
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.birth}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default ArrayMap;
