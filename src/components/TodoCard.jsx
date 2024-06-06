const TodoCard = (props) => {
  const { children, handleDelete, handleEdit, index } = props;
  return (
    <li className="todoItem">
      {children}
      <div className="actionsContainer">
        <button
          onClick={() => {
            handleEdit(index);
          }}
        >
          <i className="fa-solid fa-pen-to-square"></i>
        </button>
        <button
          onClick={() => {
            handleDelete(index);
          }}
        >
          <i className="fa-solid fa-check"></i>
        </button>
      </div>
    </li>
  );
};

export default TodoCard;
