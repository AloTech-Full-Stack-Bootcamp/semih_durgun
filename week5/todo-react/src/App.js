import React, { useState } from "react";
import "./styles.css";

const INITIAL_STATE = [
  { id: 1, title: "Task 1", completed: false },
  { id: 2, title: "Task 2", completed: false }
];

export default function App() {
  const [list, setList] = useState(INITIAL_STATE);
  const [newTask, setNewTask] = useState("");
  const [filterTask, setFilterTask] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    //Submiting todo element with these prototypes
    setList([
      ...list,
      {
        id: Date.now(),
        title: newTask,
        completed: false
      }
    ]);
    //Set newTask field with empty string
    setNewTask("");
  };

  const markCompleted = (id) => {
    setList(
      list.map((el) =>
        el.id === id ? { ...el, completed: !el.completed } : el
      )
    );
  };

  const clearCompleted = () => {
    setList(list.filter((item) => !item.completed));
  };

  const markedAll = () => {
    setList(
      list.map((el) => (!el.completed ? {...el, completed: true} : el))
    );
  };

  return (
    <section class="todoapp">
      <header class="header">
        <h1>todos</h1>
        <form onSubmit={handleSubmit}>
          <input
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            class="new-todo"
            placeholder="What needs to be done?"
            autoFocus
          />
        </form>
      </header>

      <section class="main">
        <input
          class="toggle-all"
          type="checkbox"
          onClick={() => markedAll()}
        />
        <label for="toggle-all" onClick={() => markedAll()}>Mark all as completes</label>
        <ul class="todo-list">
          {list
            .filter((item) => {
              switch (filterTask) {
                case 0:
                  return item;
                case 1:
                  return item.completed === false;
                case 2:
                  return item.completed === true;
                default:
                  return item;
              }
            })
            .map((item) => (
              <li class={item.completed ? "completed" : "active"}>
                <div class="view">
                  <input
                    class="toggle"
                    type="checkbox"
                    checked={item.completed ? true : false}
                  />
                  <label
                    onClick={() => {
                      markCompleted(item.id);
                    }}
                  >
                    {item.title}
                  </label>
                  <button
                    class="destroy"
                    onClick={() =>
                      setList(list.filter((el) => el.id !== item.id))
                    }
                  ></button>
                </div>
              </li>
            ))}
        </ul>
      </section>

      <footer class="footer">
        <span class="todo-count">
          <strong>
            {list.filter((item) => item.completed === false).length}{" "}
          </strong>
          items left
        </span>

        <ul class="filters">
          <li>
            <a
              href="/#"
              class={filterTask === 0 ? "selected" : " "}
              onClick={() => setFilterTask(0)}
            >
              All
            </a>
          </li>
          <li>
            <a
              href="/#"
              class={filterTask === 1 ? "selected" : " "}
              onClick={() => setFilterTask(1)}
            >
              Active
            </a>
          </li>
          <li>
            <a
              href="/#"
              class={filterTask === 2 ? "selected" : " "}
              onClick={() => setFilterTask(2)}
            >
              Completed
            </a>
          </li>
        </ul>

        <button onClick={() => clearCompleted()} class="clear-completed">
          Clear completed
        </button>
      </footer>
    </section>
  );
}
