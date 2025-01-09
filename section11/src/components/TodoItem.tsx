import React from "react";
import { Todo } from "../types";
import { useTodoDispatch } from "../App";

interface Props {
  props: Todo;
}

function TodoItem({ props }: Props) {
  const dispatch = useTodoDispatch();

  const onClick = () => {
    dispatch.onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClick}> 삭제</button>
    </div>
  );
}

export default TodoItem;
