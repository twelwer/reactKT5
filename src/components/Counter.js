import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { addToCart, decrementCount, incrementCount } from "../store/reducer";

function Counter() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(count));
  }, [count]);
  return (
    <div className="counter-container">
      <h1 className="counter-title">Корзина</h1>
      <ul className="item-list">
        {count.map((item) => (
          <li key={item.id} className="item">
            <span className="item-title">{item.title}</span>
            <div className="count-buttons">
              <button
                className="increment-button"
                onClick={() => dispatch(incrementCount(item.id))}
              >
                +
              </button>
              <span className="item-count">{item.count}</span>
              <button
                className="decrement-button"
                onClick={() => dispatch(decrementCount(item.id))}
              >
                -
              </button>
            </div>
          </li>
        ))}
      </ul>
      <button
        className="add-button"
        onClick={() => dispatch(addToCart(prompt("Введите название товара:")))}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default Counter;