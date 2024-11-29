import { tv } from "tailwind-variants";
import { LiHTMLAttributes, useState } from "react";

import Checkbox from "@/components/ui/checkbox";
import { useQueryClient } from "@tanstack/react-query";
import { GetTodos200Item } from "@/http/generated/api.schemas";
import {
  getGetTodosQueryKey,
  useDeleteTodosId,
  usePatchTodosId,
} from "@/http/generated/todos/todos";
import { Trash } from "lucide-react";
import { toast } from "react-toastify";

export interface TodoProps extends LiHTMLAttributes<HTMLLIElement> {
  data: GetTodos200Item;
}

export interface UpdateTodoStatusForm {
  status: "DONE";
}

const todoVariant = tv({
  base: "flex items-center gap-2 p-2",
  variants: {
    done: {
      true: "line-through",
    },
  },
});

export function TodoItem({ data, ...rest }: TodoProps) {
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

  const deleteTodoMutate = useDeleteTodosId({
    mutation: {
      onSuccess() {
        toast.success("Atividade deletada com sucesso! 😀", {
          progressStyle: {
            backgroundColor: "#84cc16",
          },
        });
      },
    },
  });

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
      className={todoVariant({ done })}
      onMouseEnter={() => setIsTrashVisible(true)}
      onMouseLeave={() => setIsTrashVisible(false)}
    >
      <div className="flex gap-4">
        <Checkbox onChange={onChange} disabled={done} defaultValue={done} />
        <p>{data.title}</p>
      </div>
      {isTrashVisible && (
        <button
          onClick={onDelete}
          className="rounded bg-rose-900 p-1 text-rose-500"
        >
          <Trash size={14} />
        </button>
      )}
    </li>
  );
}
