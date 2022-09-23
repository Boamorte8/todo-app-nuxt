const useTodos = () => {
  const { data: todos, refresh } = useFetch("/api/todo");

  const addNewTodo = async (item) => {
    if (!!item) {
      await useFetch("/api/todo", {
        method: "POST",
        body: { item },
        initialCache: false,
      });
    }
    refresh();
  };

  const updateTodo = async (id: string) => {
    await useFetch(`/api/todo/${id}`, { method: "PUT", initialCache: false });
    refresh();
  };

  const deleteTodo = async (id: string) => {
    await useFetch(`/api/todo/${id}`, {
      method: "DELETE",
      initialCache: false,
    });
    refresh();
  };

  return {
    todos,
    addNewTodo,
    updateTodo,
    deleteTodo,
  };
};

export default useTodos;
