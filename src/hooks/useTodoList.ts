import { useEffect } from 'react';
import { trpc } from '../utils/trpc';

type FirstParameterType<T extends (...args: any) => any> = Parameters<T>[0];

function handleError(error: unknown) {
  alert(error);
}

export function useTodoList() {
  const todoItems = trpc.useQuery(['todoItems.list', { skip: 0, take: 20 }], { enabled: false });
  const addTodoItem = trpc.useMutation('todoItems.create');
  const updateTodoItem = trpc.useMutation('todoItems.update');
  const deleteTodoItem = trpc.useMutation('todoItems.delete');

  useEffect(() => {
    // useQuery fetches very aggressively, use manual fetches instead
    todoItems.refetch();
    // eslint-disable-next-line
  }, []);


  async function addItem(data: FirstParameterType<typeof addTodoItem['mutate']>) {
    const todoItem = await addTodoItem.mutateAsync(data);

    if (addTodoItem.isError) {
      handleError(addTodoItem.error);
      throw Error();
    } else {
      todoItems.refetch();
    }

    return todoItem;
  }

  async function deleteItem(item: FirstParameterType<typeof deleteTodoItem['mutate']>) {
    await deleteTodoItem.mutateAsync({ id: item.id });

    if (deleteTodoItem.isError) {
      handleError(deleteTodoItem.error);
      throw Error();
    } else {
      todoItems.refetch();
    }
  }

  async function updateItem(item: FirstParameterType<typeof updateTodoItem['mutate']>) {
    const todoItem = await updateTodoItem.mutateAsync({
      id: item.id,
      done: item.done,
    });

    if (deleteTodoItem.isError) {
      handleError(deleteTodoItem.error);
      throw Error();
    } else {
      todoItems.refetch();
    }

    return todoItem;
  }

  return {
    addItem,
    deleteItem,
    updateItem,
    data: todoItems.data,
    listQuery: todoItems,
    addQuery: addTodoItem,
    deleteQuery: deleteTodoItem,
  };
}
