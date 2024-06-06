const TodoInput = (props) => {
  const { singleTodo, setSingleTodo, handleTodos } = props;
  return (
    <header>
      <input
        type="text"
        placeholder="To do... "
        value={singleTodo}
        onChange={(e) => {
          setSingleTodo(e.target.value);
        }}
      />
      <button
        onClick={() => {
          handleTodos(singleTodo);
          setSingleTodo("");
        }}
      >
        <i className="fa-solid fa-hourglass-start" />
      </button>
    </header>
  );
};

export default TodoInput;
