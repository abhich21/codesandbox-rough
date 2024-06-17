import axios from "axios";
import { useEffect, useState } from "react";

export const Todo = () => {
  const [page, setPage] = useState(1);
  const [task, setTaks] = useState("");
  const [taskList, setTaskList] = useState([]);
  const [next, setNext] = useState(null);

  useEffect(() => {
    getTasks();
  }, [page]);

  const getTasks = () => {
    axios
      .get(`http://localhost:3562/tasks?_per_page=3&_page=${page}`)
      .then((res) => {
        // console.log(res.data);
        setTaskList(res.data.data);
        setNext(res.data.next);
      });
  };

  const saveTaks = (title) => {
    const taskBody = {
      title,
      status: false,
    };

    axios.post("http://localhost:3562/tasks", taskBody).then((res) => {
      console.log(res);
      getTasks();
    });
  };

  return (
    <>
      <input
        type="text"
        placeholder="todo"
        onChange={(e) => setTaks(e.target.value)}
      />
      <button onClick={() => saveTaks(task)}>save</button>
      {taskList.map((task) => {
        return <div key={task.id}>{task.title}</div>;
      })}
      <button
        onClick={() => {
          if (page <= 1) setPage(1);
          else setPage(page - 1);
        }}
      >
        prev
      </button>
      <button
        onClick={() => {
          if (next !== null) setPage(page + 1);
        }}
      >
        next
      </button>
    </>
  );
};
