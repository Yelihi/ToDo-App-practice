import React from "react";

const List = ({ todoData, setToDoData }) => {
  const handleCompleChange = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setToDoData(newTodoData);
  };

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    setToDoData(newTodoData);
  };

  return (
    <div>
      {todoData.map((data) => {
        return (
          <div key={data.id}>
            <input
              type="checkbox"
              defaultChecked={false}
              onChange={() => handleCompleChange(data.id)}
            />
            {data.title}
            <button onClick={() => handleClick(data.id)}>x</button>
          </div>
        );
      })}
    </div>
  );
};

export default List;
