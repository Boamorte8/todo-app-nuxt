<script setup lang="ts">
const newItem = ref('');

const { todos, addNewTodo, updateTodo, deleteTodo } = useTodos();

const addTodo = () => {
  addNewTodo(newItem.value);
  newItem.value = '';
}
</script>

<template>
  <div class="container">
    <NCard class="cards">
      <h1>My Todos</h1>
      <div class="add-todo">
        <input v-model="newItem" type="text" placeholder="Add a new todo..." class="input">
        <NButton @click="addTodo">Add</NButton>
      </div>

      <NCard class="card"
             v-for="todo in todos"
             :key="todo.id"
             :class="{ 'completed': todo.completed }"
             @click="updateTodo(todo.id)">
        <h4 class="item">{{ todo.item }}</h4>
        <button class="close" @click.stop="deleteTodo(todo.id)">x</button>
      </NCard>
    </NCard>
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  margin: 0 auto;
  max-width: 50%;
}

.cards {
  padding: 2rem;
  margin-top: 1rem;
}

.add-todo {
  display: flex;
  justify-content: space-between;
}

.input {
  outline: none;
}

.card {
  padding: .5rem;
  margin-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.completed .item {
  text-decoration: line-through;
}

.close {
  user-select: none;
}
</style>
