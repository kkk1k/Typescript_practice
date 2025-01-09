import React, { useEffect } from "react";
import { Todo } from "../types";

interface Props {
  props: Todo;
  onClickDelete: (id: number) => void;
}

function TodoItem({ props, onClickDelete }: Props) {
  const onClick = () => {
    onClickDelete(props.id);
  };
  return (
    <div>
      {props.id}번 : {props.content}
      <button onClick={onClick}> 삭제</button>
    </div>
  );
}

export default TodoItem;
