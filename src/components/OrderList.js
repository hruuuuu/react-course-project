import CartItem from './CartItem';

function OrderList(props) {
  const {
    newCartItems,
    counts,
    setCounts,
    removeIndex,
    setRemoveIndex,
    setNewCartItems,
  } = props;
  return (
    <>
      <div className="col-md-8 cart">
        <div className="title">
          <div className="row">
            <div className="col">
              <h4>
                <b>購物車</b>
              </h4>
            </div>
            <div className="col align-self-center text-right text-muted">
              {newCartItems.length}種商品項目
            </div>
          </div>
        </div>
        {newCartItems.map((item, index) => {
          return (
            <div
              key={item.id}
              className={
                item.id === 0
                  ? 'row border-top border-bottom'
                  : 'row border-bottom'
              }
            >
              <CartItem
                id={item.id}
                image={item.image}
                category={item.category}
                name={item.name}
                price={item.price}
                count={counts[index]}
                setCount={(newCount) => {
                  const newCounts = [...counts];
                  newCounts[index] = newCount < 1 ? 1 : newCount;
                  setCounts(newCounts);
                }}
                newCartItems={newCartItems}
                removeIndex={removeIndex}
                setRemoveIndex={setRemoveIndex}
                setNewCartItems={setNewCartItems}
              />
            </div>
          );
        })}
        <div className="back-to-shop">
          <a href="#/">←</a>
          <span className="text-muted">回到商品頁</span>
        </div>
      </div>
    </>
  );
}

export default OrderList;
