import { tv } from "tailwind-variants";
import { LiHTMLAttributes, useState } from "react";

import Checkbox from "../../ui/checkbox";
import { useQueryClient } from "@tanstack/react-query";
import { GetTodos200Item } from "../../../http/generated/api.schemas";
import {
  getGetTodosQueryKey,
  useDeleteTodosId,
  usePatchTodosId,
} from "../../../http/generated/todos/todos";
import { Trash } from "lucide-react";

export interface CardProps extends LiHTMLAttributes<HTMLLIElement> {
  data: GetTodos200Item;
}

export interface UpdateTodoStatusForm {
  status: "DONE";
}

const cardVariant = tv({
  base: "flex items-center gap-2 p-2 relative",
  variants: {
    done: {
      true: "line-through",
    },
  },
});

export function Card({ data, ...rest }: CardProps) {
  const [isTrashVisible, setIsTrashVisible] = useState(false);
  const [done, setDone] = useState(() => {
    if (data.status === "DONE") {
      return true;
    }

    return false;
  });

  const queryClient = useQueryClient();

  const createTodoMutate = usePatchTodosId({
    mutation: {
      onSuccess() {
        setDone(true);
      },
    },
  });

  const deleteTodoMutate = useDeleteTodosId();

  const onChange = async () => {
    await createTodoMutate.mutateAsync({
      id: data.id,
      data: {
        status: done ? "TODO" : "DONE",
      },
    });

    await queryClient.invalidateQueries({
      queryKey: getGetTodosQueryKey(),
    });
  };

  const onDelete = async () => {
    await deleteTodoMutate.mutateAsync({
      id: data.id,
    });

    await queryClient.invalidateQueries({
      queryKey: getGetTodosQueryKey(),
    });
  };

  return (
    <li
      {...rest}
      className={cardVariant({ done })}
      onMouseEnter={() => setIsTrashVisible(true)}
      onMouseLeave={() => setIsTrashVisible(false)}
    >
      {isTrashVisible && (
        <button
          onClick={onDelete}
          className="absolute -left-4 rounded bg-rose-900 p-1 text-rose-500"
        >
          <Trash size={14} />
        </button>
      )}
      <Checkbox onChange={onChange} disabled={done} defaultValue={done} />
      <p>{data.title}</p>
    </li>
  );
}
