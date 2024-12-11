const todosList = [
  {
    id: 1,
    content: "店予約する",
  },
  {
    id: 2,
    content: "卵買う",
  },
  {
    id: 3,
    content: "郵便出す",
  },
];

const Example = () => {
  const $ = {};

  const init = () => {
    $.app = window.document.querySelector("#todo-js-app");
    $.list = $.app.querySelector(".todo-list");
    $.input = $.app.querySelector(".todo-input");
    $.addBtn = $.app.querySelector(".todo-add-btn");

    $.addBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const title = $.input.value;
      if(!title) return;
      const todoItemEl = createTodoElement(title);
      $.list.append(todoItemEl);
    });

    todosList.forEach(({content}) => {
      $.list.append(createTodoElement(content));
    })
  };

  const createTodoElement = (todoTitle) => {
    const todoItemEl = document.createElement("div");

    todoItemEl.innerHTML = `
      <button>完了</button>
      <span>${todoTitle}</span>
    `;

    const removeItemHandler = (e) => {
      e.target.removeEventListener("click", removeItemHandler);
      e.target.parentElement.remove();
    };
    
    todoItemEl.querySelector("button").addEventListener("click", removeItemHandler);

    return todoItemEl;
  };

  setTimeout(init);
  
  return (
    <div id="todo-js-app">
      <h2>Reminder</h2>
      <div className="todo-list">
      </div>
      <form className="todo-form">
        <input className="todo-input" type="text" />
        <button className="todo-add-btn">追加</button>
      </form>
    </div>
  );
};

export default Example;
