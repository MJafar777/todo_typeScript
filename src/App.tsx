import { useState, ChangeEvent } from "react";
import style from "./home.module.css";
import { IData } from "./interfaces";
import { data } from "./constants";

const App = (): JSX.Element => {
  const [title, setTitle] = useState<string>();
  const [arr, setArr] = useState<IData[]>(data);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>): void => {
    setTitle(e.target.value);
  };
  const handleSubmit = (): void => {
    if (!title?.length) return;
    const newDate = {
      title: title,
      id: new Date().getTime(),
      description: "description",
    };
    setArr([...arr, newDate]);
    setTitle("");
  };

  const delItem = (id: number): void => {
    const newArr = arr.filter((a) => a.id !== id);
    setArr(newArr);
  };

  return (
    <div className={style.todo}>
      <h1 className={style.title}>App Todo</h1>
      <input
        type="text"
        placeholder="Enter Todo"
        value={title}
        onChange={changeHandler}
        className={style.input}
      />
      <button onClick={handleSubmit} className={style.button}>
        Add Todo
      </button>

      <div className={style.card}>
        {arr.map((c) => (
          <div key={c.id} className={style.cardItem}>
            <p>{c.title}</p>
            <div className={style.delBtn}>
              <button onClick={() => delItem(c.id)}>del</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
